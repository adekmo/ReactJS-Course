import React, { useState } from 'react'

const MultipleInput = () => {

    // const [firstName, setFirstName] = useState('')
    // const [email, setEmail] = useState('')
    // const [age, setAge] = useState('')
    // masukkan ke 3 state diatas kedalam satu state(person)
    const [person, setPerson] =useState({firstName: '', email: '', age: ''});
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        // berasal dr name dan value dibagian form
        const name = e.target.name
        const value = e.target.value
        // ambil nilai semua person(...person), [name] isinya firstName, email dan age.
        setPerson({...person, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(person.firstName && person.email && person.age){
            const newPerson = { ...person, id: new Date().getTime().toString() }
            setPeople([...people, newPerson])
            setPerson({firstName: '', email: '', age: ''})
        }
    }

    return (
        <div>
            <article>
                <form>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName" 
                            value={person.firstName}
                            onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={person.email}
                            onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age : </label>
                        <input 
                            type="text" 
                            name="age" 
                            id="age" 
                            value={person.age}
                            onChange={handleChange} />
                    </div>
                    <button type='submit' onClick={handleSubmit}>add person</button>
                </form>
            </article>
            <article>
                {
                    people.map((person, index) => {
                        const { id, firstName, email, age } = person;
                        return (
                            <div key={id}>
                                <h4>{index+1}</h4>
                                <h4>{firstName}</h4>
                                <p>{email}</p>
                                <p>{age}</p>
                            </div>
                        )
                    })
                }
            </article>
        </div>
    )
}

export default MultipleInput
