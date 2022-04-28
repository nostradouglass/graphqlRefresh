
import React from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_USERS } from '../queries/userQueries'

export default function UsersList() {

    const { loading, error, data } = useQuery(FETCH_USERS)

    const mapUsers = () => {

        if (error) <h3 className='text-red-500'>Error Loading Users</h3>
        if (loading) {
            return <h3>Loading...</h3>
        }
        return (
            <ul>
                {data.users.map((user) => {
                    return <li key={user.id}>Name: {user.firstName} | age: {user.age}</li>
                })
                }
            </ul>
        )
    }

    return (
        <div>
            <h3>User List</h3>
            {mapUsers()}
        </div>
    )
}
