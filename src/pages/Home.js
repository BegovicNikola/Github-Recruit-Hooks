import React from 'react'
import Search from '../components/Search/Search'
import Users from '../components/Users/Users'
import Pagination from '../components/Pagination/Pagination'

const Home = () => {
  return (
    <div>
      <Search />
      <Users />
      <Pagination />
    </div>
  )
}

export default Home
