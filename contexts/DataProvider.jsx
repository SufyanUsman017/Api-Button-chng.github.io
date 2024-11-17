import React from 'react';
import { createContext, useState } from 'react';

const mainContext = createContext();

function DataProvider({ children }) {

    const [name, setName] = useState("Bilal")

    return (
        <mainContext.Provider value={
            {
                name,
                setName
            }
        }>
            {children}
        </mainContext.Provider>
    )
}

export default DataProvider;
export { mainContext }