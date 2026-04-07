import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import img from "../../assets/images/hero.png"

const Banner = () => {
    return (
        <div className='space-y-15 mt-15'>
            <div className='max-w-[90%] lg:max-w-[60%] mx-auto text-center space-y-5'>
                <h2 className='text-3xl lg:text-5xl font-bold leading-15'>We Build<br /> <span>Productive</span> Apps</h2>
                <p className='font-semibold'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-5'>
                    <button className='flex btn btn-success text-white items-center gap-2 text-lg font-semibold'><FaGooglePlay />Google Play</button>
                    <button className='flex btn btn-success text-white items-center gap-2 text-lg font-semibold'><FaAppStoreIos />App Play</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={img} alt="hero" />
            </div>
        </div>
    );
};

export default Banner;