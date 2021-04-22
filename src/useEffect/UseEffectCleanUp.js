import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {

    const [size, setSize] = useState(window.innerWidth)
    console.log(size)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(()=> {
        window.addEventListener('resize', checkSize )

        // cleanup
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return (
        <div>
            <h1>Window</h1>
            <h2>Size : {size} PX</h2>
        </div>
    )
}

export default UseEffectCleanUp
