import React, { useEffect, useState } from 'react'
// default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasic = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if(value > 1){
            document.title = `New Messages (${value})`
        }
        
    }, [value])

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>click</button>
        </div>
    )
}

export default UseEffectBasic
