import React, { useContext } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Data } from '../Context/Context';
import { toast,Bounce } from 'react-toastify';

const InstallCarts = ({p}) => {

    const {setI} = useContext(Data)

    const a = () => {
        setI(c => c.filter(v => v.id !== p.id))
        toast.success('App Uninstall successfully', {
            position: "top-right",
            autoClose: 499,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className='flex flex-col lg:flex-row justify-center transition duration-300 hover:-translate-y-2 items-center lg:justify-between border rounded-2xl p-4 lg:pr-8'>
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-3 mb-2 lg:mb-0'>
                            <div>
                                <img src={p.image} alt="logo" className='h-18 rounded-2xl'/>
                            </div>
                            <div className='space-y-2 lg:space-y-1'>
                                <h2 className='text-2xl font-bold text-center lg:text-left'>{p.title}</h2>
                                <div className='flex justify-center lg:justify-start items-center gap-5'>
                                    <h2 className='font-bold text-green-500 flex items-center gap-1'><FaDownload />{p.downloads}</h2>
                                    <h2 className='font-bold text-yellow-500 flex items-center gap-1'><FaStar />{p.ratingAvg}</h2>
                                    <h2 className='font-bold'>{p.size}MB</h2>
                                </div>
                            </div>
                        </div>
                        <button onClick={a} className='text-white font-bold btn btn-success'>Unistall</button>
                    </div>
    );
};

export default InstallCarts;