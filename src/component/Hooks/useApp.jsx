import React, { useContext, useEffect, useState } from 'react';
import { Data } from '../../Context/Context';
import axios from "axios"

const useApp = () => {

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

    return {cart,loading}
};

export default useApp;