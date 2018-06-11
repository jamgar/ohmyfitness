import axios from 'axios'
import { history } from '../routers/AppRouter'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../constants'

const ROOT_URL = 'http://localhost:3000'

export const login = () => ({
  type: AUTH_USER
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
}

export const logout = () => ({
  type: UNAUTH_USER
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
