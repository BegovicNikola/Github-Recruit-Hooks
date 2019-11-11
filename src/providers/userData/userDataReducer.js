import { FETCH_USERS, SWITCH_PAGE, IS_LOADING } from '../actionTypes'

export default (state, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.users,
        search: action.payload.search,
        page: action.payload.page,
        totalUsers: action.payload.totalUsers,
        isLoading: false
      }
    case SWITCH_PAGE:
      return {
        ...state,
        page: action.payload.page
      }
    case IS_LOADING:
      return { ...state, isLoading: true }
    default:
      return state
  }
}
