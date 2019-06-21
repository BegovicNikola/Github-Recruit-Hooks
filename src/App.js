import React from 'react'
import UserDataProvider from './providers/userData/UserDataProvider'
import Users from './components/Users/Users'
import './App.css'

const App = () => {
  return (
    <UserDataProvider>
      <div className="App">
        <Users />
      </div>
    </UserDataProvider>
  )
}

export default App
