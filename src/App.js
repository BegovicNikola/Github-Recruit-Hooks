import React from 'react'
import { Router } from '@reach/router'
import UserDataProvider from './providers/userData/UserDataProvider'
import Navigation from './components/Navigation/Navigation'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import './App.css'

const App = () => {
  return (
    <UserDataProvider>
      <div className="App">
        <Navigation />
        <Router>
          <Home path="/" />
          <NotFound default />
        </Router>
      </div>
    </UserDataProvider>
  )
}

export default App
