import React, { useState, useContext } from 'react'
import UserDataContext from '../../providers/userData/userDataContext'

const Users = () => {
  const userDataContext = useContext(UserDataContext)

  const { searchUsers, switchPage, page, totalUsers } = userDataContext

  const [search, setSearch] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    searchUsers(search)
  }

  return (
    <div>
      {'hello'}
      <form onSubmit={onSubmit}>
        <input name="search" onChange={e => setSearch(e.target.value)} />
        <input type="submit" value="s" />
      </form>
      <button disabled={page < 2} onClick={() => switchPage(page - 1)}>
        -
      </button>
      <button
        disabled={page > totalUsers / 30}
        onClick={() => switchPage(page + 1)}
      >
        +
      </button>
    </div>
  )
}

export default Users
