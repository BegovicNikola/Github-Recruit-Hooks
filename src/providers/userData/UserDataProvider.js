import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../services/services'
import UserDataContext from './userDataContext'
import UserDataReducer from './userDataReducer'
import { GET_USERS, IS_LOADING } from '../actionTypes'

const UserDataProvider = props => {
  const initialState = {
    users: [],
    search: null,
    page: null,
    totalUsers: null,
    isLoading: false
  }

  const [state, dispatch] = useReducer(UserDataReducer, initialState)

  // Initially loaded users
  useEffect(() => {
    fetchUsers()
    return () => {}
    // Disabling a generic warning
    // eslint-disable-next-line
  }, [])

  console.log(state)

  // Get users
  const fetchUsers = async (user = 'a', page = 1) => {
    initLoading()

    const res = await axios.get(`${BASE_URL}search/users`, {
      params: {
        client_id: '71e24cf7dcf8b14c8713',
        client_secret: '4afda53eca11550c8cda6fc149f11b47badd0c56',
        q: user,
        page: page
      }
    })

    dispatch({
      type: GET_USERS,
      payload: {
        users: res.data.items,
        search: user,
        page: page,
        totalUsers: res.data.total_count
      }
    })
  }

  // Switch page
  const switchPage = async (page, type) => {
    console.log(page, type)
    dispatch({
      type: type,
      payload: {
        page: page
      }
    })

    initLoading()

    fetchUsers(state.search, page)
  }

  // Loading...
  const initLoading = () => dispatch({ type: IS_LOADING })

  return (
    <UserDataContext.Provider
      value={{
        users: state.users,
        search: state.search,
        page: state.page,
        isLoading: state.isLoading,
        fetchUsers,
        switchPage
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  )
}

export default UserDataProvider
