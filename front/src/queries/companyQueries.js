import { gql } from '@apollo/client'

export const FETCH_COMPANIES = gql`
{
    companies {
      id
      name
      location
    }
  }
`

export const ADD_COMPANY = gql`
 mutation ADD_COMPANY($name: String!, $location: String) {
       addCompany(name: $name, location: $location) {
         id
         name
         location
       }
     }
`
