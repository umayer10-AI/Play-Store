import React, { useContext } from 'react';
import CartDeatils from './CartDeatils';
import { Data } from '../Context/Context';
import { FaDownload, FaStar } from 'react-icons/fa';
import InstallCarts from './InstallCarts';
import { IoLogoReact } from 'react-icons/io5';

const Installation = () => {

    const {i} = useContext(Data)
    console.log(i)

    return (
        <div className='max-w-[80%] mx-auto'>
            <div className='text-center space-y-3 my-10'>
                <h2 className='text-4xl font-bold'>Your Installed Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='my-10'>
                <h2 className='font-bold text-2xl'>({i.length}) Apps Found</h2>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    i.map(v => <InstallCarts key={v.id} p={v}></InstallCarts>)
                }
            </div>
            {
                i.length === 0 && (
                    <div className='text-center border rounded-2xl py-10 space-y-1'>
                        <h2 className='text-6xl font-bold flex justify-center'><IoLogoReact /></h2>
                        <h2 className='font-semibold'>You have no App choice</h2>
                        <h2 className='text-3xl font-bold'>Please Choice a App</h2>
                    </div>
                )
            }
        </div>
    );
};

export default Installation;