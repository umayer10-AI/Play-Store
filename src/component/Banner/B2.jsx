import React from 'react';

const B2 = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-5 lg:py-15'>
            <div className='max-w-[90%] lg:max-w-[70%] mx-auto space-y-7'>
                <div>
                    <h2 className='text-3xl font-bold'>Trusted by Millions, Built for You</h2>
                </div>
                <div className='grid grid-cols-3'>
                    <div>
                        <p>Total Downloads</p>
                        <h2 className='text-2xl lg:text-4xl font-bold'>29.6M</h2>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h2 className='text-2xl lg:text-4xl font-bold'>906K</h2>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h2 className='text-2xl lg:text-4xl font-bold'>132+</h2>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default B2;