import React, { useRef } from 'react'

// mempertahankan nilai
// tidak memancing re-render
// target DOM nodes/elements

const UseRefBasic = () => {

    const refContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} name="" id=""/>
                    <button type='submit'>submit</button>
                </div>
            </form>
            
        </div>
    )
}

export default UseRefBasic
