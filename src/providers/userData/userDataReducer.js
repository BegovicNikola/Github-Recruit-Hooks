import { GET_USERS, IS_LOADING } from '../actionTypes'

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload, isLoading: false }
    case IS_LOADING:
      return { ...state, isLoading: true }
    default:
      return state
  }
}
