import React, { useContext, useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import B2 from './Banner/B2';
import { Data } from '../Context/Context';
import axios from "axios"
import { FaDownload, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Home = () => {

    const {cart,setCart} = useContext(Data)
    const [loading, setL] = useState(true)

    useEffect(() => {
        const a = async () => {
            try{
                setL(true)
                const b = await axios.get("data.json")
                setCart(b.data)
            }
            finally{
                setL(false)
            }
        }
        a()
    },[])

    if(loading) return 

    return (
        <div className='mb-20'>
            <Banner></Banner>
            <B2></B2>

            <div className='max-w-[80%] mx-auto mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    cart.slice(0,6).map((v,i) => (
                        <Link to={`/cartinfo/${v.id}`} key={i} className='border rounded-2xl p-5 space-y-3'>
                            <div className='bg-gray-700 flex justify-center rounded-2xl py-4'>
                                <img src={v.image} className='h-30 rounded-2xl' alt="" />
                            </div>
                            <h2 className='font-bold'>{v.title}</h2>
                            <div className='flex justify-between items-center'>
                                <h2 className='flex items-center gap-2 btn btn-accent font-bold'><FaDownload />{v.downloads}</h2>
                                <h2 className='flex items-center gap-2 btn btn-warning font-bold'><FaRegStar />{v.ratingAvg}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className='flex justify-center'>
                <Link to={'/apps'} className='btn btn-primary'><button>Show All</button></Link>
            </div>

        </div>
    );
};

export default Home;