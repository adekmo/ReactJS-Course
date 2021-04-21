import React, { useState } from 'react'

const UseStateCounter = () => {

    const [value, setValue] = useState(0)

    // tambah 1 setelah diklik 2 detik
    const complexIncrease = () => {
        setTimeout(() => {
            // setValue(value + 1)
            setValue((valueSebelumnya) => {
                return valueSebelumnya + 1
            })
        }, 2000)
    }

    return (
        <div>
            <section>
                <h2>Regular Counter</h2>
                <h1>{value}</h1>
                <button onClick={() => setValue(value - 1)}>kurang</button>
                <button onClick={() => setValue(0)}>reset</button>
                <button onClick={() => setValue(value + 1)}>tambah</button>
            </section>
            <section>
            <h2>Complex Counter</h2>
                <h1>{value}</h1>
                <button onClick={complexIncrease}>increase later</button>
            </section>
        </div>
    )
}

export default UseStateCounter
