import React, { useEffect, useState } from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button onClick={() => setShow(!show)}>show/hide</button>
            {show && <Item />}
        </div>
    )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return (
        <div>
            <h2>Window</h2>
            <h3>size: {size}</h3>
        </div>
    )
}

export default ShowHide
