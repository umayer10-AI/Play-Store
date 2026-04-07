import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [cart, setCart] = useState([])
    const [i, setI] = useState([])

    return (
        <Data.Provider value={{cart,setCart,i,setI}}>
            {children}
        </Data.Provider>
    );
};

export default Context;