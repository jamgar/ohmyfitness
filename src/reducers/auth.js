import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true }
      break;
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false}
      break;
    case AUTH_ERROR:
      return { ...state, error: action.payload }
      break;
    default:
      return state
  }
}
