import React, { Fragment, useState, useContext } from 'react'
import UserDataContext from '../../providers/userData/userDataContext'

const Search = () => {
  const userDataContext = useContext(UserDataContext)

  const { searchUsers } = userDataContext

  const [search, setSearch] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    searchUsers(search)
  }
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input name="search" onChange={e => setSearch(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  )
}

export default Search
