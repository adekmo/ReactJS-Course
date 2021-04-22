import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturn = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [user, setUser] = useState('default user')
    const [loc, setLoc] = useState('')

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(res.status >= 200 && res.status <= 299){
                return res.json()
            } else {
                setLoading(false)
                setError(true)
                throw new Error(res.statusText)
            }
        })
        .then((data) => {
            const {login, location} = data
            setUser(login)
            setLoc(location)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])
    
    if(loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    if(error){
        return (
            <div>
                <h2>Error...</h2>
            </div>
        )
    }
        return (
            <div>
                <h2>{user}</h2>
                <h2>{loc}</h2>
            </div>
        )
}

export default MultipleReturn
