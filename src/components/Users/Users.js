import React, { useContext } from 'react'
import UserDataContext from '../../providers/userData/userDataContext'

const Users = () => {
  const userDataContext = useContext(UserDataContext)

  const { users } = userDataContext
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.login}</p>
      ))}
    </div>
  )
}

export default Users
