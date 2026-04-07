import React from 'react';
import { BiLike } from 'react-icons/bi';
import { FaDownload, FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const CartDeatils = () => {

    const {id} = useParams()
    const p = useLoaderData()
    const app = p.find(v => v.id === Number(id))

    return (
        <div className='max-w-[80%] mx-auto'>
            <div className='flex items-center gap-10 border-b border-b-gray-500 py-10'>
                <div>
                    <img src={app.image} alt="photo" className='h-60 rounded-2xl object-contain' />
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold'>{app.title}</h2>
                    <p className='font-semibold'>Developed by {app.companyName}</p>
                    <hr className='text-gray-500'/>
                    <div className='grid grid-cols-3'>
                        <div className=''>
                            <h2 className='text-3xl text-green-400'><FaDownload /></h2>
                            <h2>Downloads</h2>
                            <h2 className='text-3xl font-bold'>{app.downloads}</h2>
                        </div>
                        <div>
                            <h2 className='text-3xl text-yellow-300'><FaStar /></h2>
                            <h2>Average Ratings</h2>
                            <h2 className='text-3xl font-bold'>{app.ratingAvg}</h2>
                        </div>
                        <div>
                            <h2 className='text-3xl text-blue-400'><BiLike /></h2>
                            <h2>Total Reviews</h2>
                            <h2 className='text-3xl font-bold'>{app.reviews}</h2>
                        </div>
                    </div>
                    <button className='btn btn-success text-white font-bold'>Install Now({app.size} MB)</button>
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-bold my-5'>Description</h2>
                <p>{app.description}</p>
            </div>
        </div>
    );
};

export default CartDeatils;