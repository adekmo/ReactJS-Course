import React, { useEffect, useState } from 'react'


const url = 'https://api.github.com/users'

const UseEffectFetch = () => {

    const [users, setUsers] = useState([])

    const getUsers = async() => {
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
        // console.log(data)
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <h3>Github Users</h3>
            <ul className='githubuser'>
            {
                users.map((user) => {
                    return (
                        <li key={user.id}>
                            <img src={user.avatar_url} alt={user.login} />
                            <div className='text'>
                                <h4>{user.login}</h4>
                                <a href={user.html_url}>Github Profile</a>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default UseEffectFetch
