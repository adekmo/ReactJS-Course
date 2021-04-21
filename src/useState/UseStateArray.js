import React, { useState } from 'react'
import {data} from '../data'

const UseStateArray = () => {
    const [orang, setOrang] = useState(data)
    const removeItem = (id) => {
        const orangBaru = orang.filter((org) => org.id !== id)
        setOrang(orangBaru)
    }

    return (
        <div>
            {
                orang.map((org) => {
                    return (
                        <div key={org.id}>
                            <h4>{org.nama}</h4>
                            <button onClick={() => removeItem(org.id)}>remove</button>
                        </div>
                    )
                })
            }
            <button onClick={() => setOrang([])}>clear all</button>
        </div>
    )
}

export default UseStateArray
