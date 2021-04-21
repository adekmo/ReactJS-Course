import React, { useState } from 'react'

const UseStateObject = () => {

    const [orang, setOrang] = useState(
        {
            nama: 'Adek',
            umur: 28,
            pesan: 'pesan random',
        })

    const gantiPesan = () => {
        setOrang({ ...orang, pesan: 'cilukbaaa'})
    } 

    return (
        <div>
            <h3>{orang.nama}</h3>
            <h3>{orang.umur}</h3>
            <h3>{orang.pesan}</h3>
            <button onClick={gantiPesan}>ganti pesan</button>
        </div>
    )
}

export default UseStateObject
