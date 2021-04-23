import React, { useState } from 'react'

const ShortCircuit = () => {
    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    // jika nilai pertama false, maka nilai yg kedua muncul.
    // jika nilai pertama benar, maka itu yg muncul
    // text bernilai false krna empty/kosong value(string)
    const firstValue = text || 'hello dek'

    // jika nilai pertama benar, maka nilai kedua yang muncul
    // jika nilai pertama false, maka nilai pertama yg muncul
    const secondValue = text && 'hello dek'

    return (
        <div>
            <h2>{firstValue}</h2>
            <h2>Value: {secondValue}</h2>
            <br/>
            <h3>contoh</h3>
            <h3>{text || 'adekmo'}</h3>
            <button onClick={() => setError(!error)}>toggle error</button>
            {error && <h2>Error...</h2>}
            {/* jikai error bernilai true (?) maka muncul nilai, jika false (:) maka mncul nilai */}
            {error ? <p>ada error</p> : <h2>tidak ada error</h2> }
            {text && <h1>Hellow Dek</h1>}
            {!text && <h1>Hellow Dek</h1>}
        </div>
    )
}

export default ShortCircuit
