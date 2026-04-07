import React from 'react';
import { FaDownload, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Appscart = ({p}) => {

    return (
        <Link to={`/cartinfo/${p.id}`} className='border rounded-2xl p-5 space-y-3 group'>
            <div className='bg-gray-700 flex justify-center rounded-2xl py-4'>
                <img src={p.image} className='h-30 rounded-2xl group-hover:scale-110 transition duration-300' alt="" />
            </div>
            <h2 className='font-bold'>{p.title}</h2>
            <div className='flex justify-between items-center'>
                <h2 className='flex items-center gap-2 btn btn-accent font-bold'><FaDownload />{p.downloads}</h2>
                <h2 className='flex items-center gap-2 btn btn-warning font-bold'><FaRegStar />{p.ratingAvg}</h2>
            </div>
        </Link>
    );
};

export default Appscart;