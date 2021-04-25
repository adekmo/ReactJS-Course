import React, { useReducer, useState } from 'react'
import Modal from "./Modal";
import { data } from "../data";
import { Reducer } from "./Reducer";

const defaultState = {
    // people: data, (kalau ingin nilai people berisi file dr data.js)
    people: [],
    show: false,
    isiModal: ''
} 

const Refactor = () => {

    const [nama, setNama] = useState('')
    const [oncom, setOncom] = useReducer(Reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nama) {
            const newNama = { id: new Date().getTime().toString(), nama}
            setOncom({type: 'ADD_ITEM', payload: newNama})
            setNama('')
        } else {
            setOncom({type: 'KOSONG'})
        }
    }

    const closeModal = () => {
        setOncom({type: 'CLOSE_MODAL'})
    }

    return (
        <div>
            {oncom.show && <Modal closeModal={closeModal} isiModal={oncom.isiModal}/>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            {
                oncom.people.map((p) => {
                    return (
                        <div key={p.id}>
                            <h3>{p.nama}</h3>
                            <button onClick={() => setOncom({type: 'HAPUS', payload: p.id})}>hapus</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Refactor
