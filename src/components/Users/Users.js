import React, { useContext } from 'react'
import UserDataContext from '../../providers/userData/userDataContext'

const Users = () => {
  const userDataContext = useContext(UserDataContext)
  return (
    <div>
      Hello World!{' '}
      <button onClick={() => userDataContext.fetchUsers()}>O</button>
    </div>
  )
}

export default Users
