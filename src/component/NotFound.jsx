import React from 'react';
import { Link } from 'react-router';
import img from "../assets/images/error-404.png"

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='space-y-5'>
                <div className='flex justify-center'>
                    <img src={img} className='h-50 lg:h-full' alt="error" />
                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-primary'><Link to="/">Go Back Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;