import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import LoadingPage from './components/LoadingPage'

const store = configureStore()
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
// let hasRendered = true
// const renderApp = () => {
//   if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
//     hasRendered = true
//   }
// }

// ReactDOM.render(<LoadingPage />, document.getElementById('app'))

// const auth_token = localStorage.getItem('auth_token')
// if (auth_token) {
//   store.dispatch(login())
//   renderApp()
//   if (history.location.pathname === '/') {
//     history.push('/dashboard')
//   } else {
//     store.dispatch(logout())
//     renderApp()
//     history.push('/')
//   }
// }
