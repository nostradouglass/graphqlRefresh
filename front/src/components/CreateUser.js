import React, { useState } from 'react'

import { gql, useMutation } from '@apollo/client'

export default function CreateUser() {

  const [addUser] = useMutation(ADD_USER);

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

const ADD_USER = gql`
mutation ADD_USER($firstName: String, $age: Int) {
    addUser(firstName:$firstName, age: $age) {
      id
      firstName
      age
    }
  }
`