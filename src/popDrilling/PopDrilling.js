import React, { useState } from 'react'
import { data } from '../data';

const PopDrilling = () => {

    const [people, setPeople] = useState(data)
    const removePerson = (id) => {
        setPeople((people) => {
            return (
                people.filter((person) => person.id !== id)
            )
        })
    }

    return (
        <div>
            <section>
                <List people={people} removePerson={removePerson} />
            </section>
        </div>
    )
}

const List = ({people, removePerson}) => {
    return (
        <div>
            {
                people.map((person) => {
                    return (
                        <SinglePerson key={person.id} {...person} removePerson={removePerson} />
                    )
                })
            }
        </div>
    )
}

const SinglePerson = ({id, nama, removePerson}) => {
    return (
        <div>
            <h4>{nama}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    )
}

export default PopDrilling
