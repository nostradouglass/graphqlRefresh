import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

export default function CreateCompany() {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")

    const [addCompany] = useMutation(ADD_COMPANY)

    const submitCreateCompany = (e) => {
        e.preventDefault();
        addCompany({ variables: { name, location } })
        .then(() => {
            setName("")
            setLocation("")
        })
    }


    return (
        <div>
            <h3>Create Company</h3>
            <form onSubmit={submitCreateCompany}>
                <input value={name} onChange={e => setName(e.target.value)} />
                <input value={location} onChange={e => setLocation(e.target.value)} />
                <button type="submit">Create Company</button>
            </form>
        </div>
    )
}


const ADD_COMPANY = gql`
 mutation ADD_COMPANY($name: String, $location: String) {
       addCompany(name: $name, location: $location) {
         id
         name
         location
       }
     }
`
