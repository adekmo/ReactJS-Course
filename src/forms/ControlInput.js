import React, { useState } from 'react'

const ControlInput = () => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(firstName, email)
        if(firstName && email) {
            const person = {firstName, email}
            setPeople((people) => {
                return [...people, person]
            })
            setFirstName('')
            setEmail('')
        } else {
            console.log('empty value')
        }
    }
    return (
        <div>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type='submit'>add person</button>
                </form>
                {
                    people.map((p, id) => {
                        return (
                            <div key={id}>
                                <h3>No : {id+1}</h3>
                                <h3>Name : {p.firstName}</h3>
                                <h3>Email : {p.email}</h3>
                            </div>
                        )
                    })
                }
            </article>
        </div>
    )
}

export default ControlInput
