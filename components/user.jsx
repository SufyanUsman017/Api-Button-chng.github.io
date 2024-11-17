import React from 'react'
import useData from "../hooks/useData";

function User() {

    let { name, setName } = useData();

    return (
        <>
            <div>{name}</div>
            <button onClick={()=> { setName("Ohad") }}>Click Me 2</button>
        </>
    )
}

export default User