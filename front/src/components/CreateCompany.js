import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { FETCH_COMPANIES, ADD_COMPANY } from '../queries/companyQueries'

export default function CreateCompany() {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")

    const [addCompany] = useMutation(ADD_COMPANY, {
        refetchQueries: [
            FETCH_COMPANIES
        ]
    })

    const submitCreateCompany = (e) => {
        e.preventDefault();
        addCompany({ 
            variables: { name, location },
            optimisticResponse: {
                addCompany: {
                    id: "temp",
                    name: name,
                    location: location,
                    __typename: "CompanyType",
                }
            }
        })
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
