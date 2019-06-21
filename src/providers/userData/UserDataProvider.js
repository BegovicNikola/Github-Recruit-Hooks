import React, { useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../services/services'
import UserDataContext from './userDataContext'
import UserDataReducer from './userDataReducer'
import { GET_USERS, IS_LOADING } from '../actionTypes'

const UserDataProvider = props => {
  const initialState = {
    users: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(UserDataReducer, initialState)

  // Get users
  const fetchUsers = async (user = 'a', numPage = 1) => {
    initLoading()

    const res = await axios.get(`${BASE_URL}search/users`, {
      params: {
        client_id: '71e24cf7dcf8b14c8713',
        client_secret: '4afda53eca11550c8cda6fc149f11b47badd0c56',
        q: user,
        page: numPage
        // per_page: perPage
      }
    })

    dispatch({ type: GET_USERS, payload: res.data.items })
  }

  // Loading...
  const initLoading = () => dispatch({ type: IS_LOADING })

  return (
    <UserDataContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}
    >
      {props.children}
    </UserDataContext.Provider>
  )
}

export default UserDataProvider
