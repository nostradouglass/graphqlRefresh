import React from 'react'
import { gql, useQuery } from '@apollo/client'

export default function CompanyList() {

    const { loading, error, data } = useQuery(FETCH_COMPANIES)

    if (error) <h3>Error!</h3>
    if (loading) <h3>Loading...</h3>

    const mapCompanies = () => {
        if (data) {
            return (
                data.companies.map((company) => {
                    return <li key={company.id}>name: {company.name} | location : {company.location}</li>
                })
            )
        } else {
            return <li></li>
        }
    }

    return (
        <div>
            <h3>CompanyList</h3>
            <ul>
                {mapCompanies()}
            </ul>
        </div>
    )
}


const FETCH_COMPANIES = gql`
{
    companies {
      id
      name
      location
    }
  }
`
