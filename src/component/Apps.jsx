import React from 'react';
import Appscart from './Appscart';
import { useLoaderData, useNavigation } from 'react-router';
import { FaDownload, FaRegStar } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';

const Apps = () => {

    const p = useLoaderData();
    const n = useNavigation();

    if(n.state === "loading"){
        return (
            <div className='flex justify-center'>
                <HashLoader color='#ffffff'/>
            </div>
        )
    }

    return (
        <div className='mt-10 mb-20 max-w-[80%] mx-auto'>

            <div className='text-center space-y-3 max-w-[90%] mx-auto'>
                <h2 className='text-4xl font-bold'>Our All Applications</h2>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='my-10'>
                <h2 className='font-bold text-2xl'>Apps Found</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    p.map((v,i) => <Appscart key={i} p={v}></Appscart>)
                }
            </div>
            
        </div>
    );
};

export default Apps;