import { gql } from '@apollo/client'

export const FETCH_USERS = gql`
{
    users {
        id
        firstName
        age
    }
}
`


export const ADD_USER = gql`
mutation ADD_USER($firstName: String!, $age: Int) {
    addUser(firstName:$firstName, age: $age) {
      id
      firstName
      age
    }
  }
`