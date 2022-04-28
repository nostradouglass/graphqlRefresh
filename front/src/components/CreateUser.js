import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { FETCH_USERS, ADD_USER } from '../queries/userQueries';

export default function CreateUser() {

  const [addUser] = useMutation(ADD_USER,
    {
    refetchQueries: [
      FETCH_USERS
    ]
  }
  );

  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
    addUser({ variables: { firstName: name, age: parseInt(age) } })
  }

  return (
    <div>
      <h4 >CreateUser</h4>
      <form onSubmit={submitForm} >
        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={age} onChange={e => setAge(e.target.value)} />
        < button type="submit">Submit</button>
      </form>
    </div>
  )
}
