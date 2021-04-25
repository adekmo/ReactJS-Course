import React, { useEffect } from 'react'

const Modal = ({isiModal, closeModal}) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 3000)
    })
    return (
        <div>
            <p>{isiModal}</p>
        </div>
    )
}

export default Modal
