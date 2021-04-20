import React, { useState } from 'react'

const UseStateBasic = () => {

    const [text, setText] = useState('random text')

    const handleClick = () => {
        if (text === 'random text') {
            setText('Adekmo')
        } else {
            setText('random text')
        }
    }

    return (
        <div>
            <h2>{text}</h2>
            <button onClick={handleClick}>change text</button>
        </div>
    )
}

export default UseStateBasic
