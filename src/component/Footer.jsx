import React from 'react';
import img from "../assets/images/logo.png"
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#001931] py-10'>
            <div className='max-w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <img src={img} className='h-10' alt="logo" />
                        <h2 className='font-bold'>HERO.IO</h2>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Social Links</h2>
                        <ul className='flex justify-center items-center gap-4'>
                            <li className='text-xl'><FaGithub /></li>
                            <li className='text-xl'><FaFacebook /></li>
                            <li className='text-xl'><FaTwitter /></li>
                        </ul>
                    </div>
                </div>
                <hr className='text-gray-500 my-5'/>
                <h2 className='text-center text-gray-400'>Copyright © 2025 - All right reserved</h2>
            </div>
        </div>
    );
};

export default Footer;