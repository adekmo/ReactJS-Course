import React, { useState } from 'react'
import {data} from '../data'

const UseStateArray = () => {
    const [orang, setOrang] = useState(data)

    // remove cara 1
    const removeItem = (id) => {
        const orangBaru = orang.filter((org) => org.id !== id)
        setOrang(orangBaru)
    }

    // remove cara 2
    // const removeItem = (id) => {
    //     setOrang((orangLama) => {
    //         const orangBaru = orangLama.filter((org) => org.id !== id)
    //         return orangBaru
    //     })
    // }

    return (
        <div>
            {
                orang.map((org) => {
                    return (
                        <div key={org.id}>
                            <h4>{org.nama} <button onClick={() => removeItem(org.id)}>remove</button></h4>
                            
                        </div>
                    )
                })
            }
            <button onClick={() => setOrang([])}>clear all</button>
        </div>
    )
}

export default UseStateArray
