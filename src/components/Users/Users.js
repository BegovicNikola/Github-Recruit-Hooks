import React, { useContext } from 'react'
import UserDataContext from '../../providers/userData/userDataContext'
import { SWITCH_PAGE } from '../../providers/actionTypes'

const Users = () => {
  const userDataContext = useContext(UserDataContext)
  return (
    <div>
      Hello World!{' '}
      <button
        disabled={userDataContext.page < 2}
        onClick={() =>
          userDataContext.switchPage(userDataContext.page - 1, SWITCH_PAGE)
        }
      >
        -
      </button>
      <button
        disabled={userDataContext.page < userDataContext.totalUsers / 30}
        onClick={() =>
          userDataContext.switchPage(userDataContext.page + 1, SWITCH_PAGE)
        }
      >
        +
      </button>
    </div>
  )
}

export default Users
