import React, { useContext, useState } from 'react'
import { data } from '../data'

// 1
const PersonContext = React.createContext();
// 2 komponen (Provider dan Consumer)
// provider sbg distributor

const ContextApi = () => {
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
            {/* 2 */}
            <PersonContext.Provider value={{removePerson, people}}>
                <List />
            </PersonContext.Provider>
        </div>
    )
}

const List = () => {
    // 4
    // akses objeknya tidak perlu tanda {}
    const dataUtama = useContext(PersonContext)
    return (
        <div>
            {
                dataUtama.people.map((person) => {
                    return (
                        <SinglePerson key={person.id} {...person} />
                    )
                })
            }
        </div>
    )
}

const SinglePerson = ({id, nama}) => {
    // 3
    const {removePerson} = useContext(PersonContext)
    return (
        <div>
            <h4>{nama}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    )
}

export default ContextApi
