import React, { useState } from 'react'
import Modal from "./Modal";
import { data } from "../data";

const UseReducerSetUp = () => {

    const [people, setPeople] = useState(data)
    const [show, setShow] = useState(false)
    const [nama, setNama] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nama) {
            setShow(true)
            setPeople([...people, {id: new Date().getTime().toString(), nama}])
            setNama('')
        } else {
            setShow(true)
        }
    }

    return (
        <div>
            {show && <Modal />}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            {
                people.map((p) => {
                    return (
                        <div key={p.id}>
                            <h3>{p.nama}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseReducerSetUp
