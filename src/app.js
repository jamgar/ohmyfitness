import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Switch } from 'react-router-dom'
import history from './history'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import { startGetWorkouts } from './actions/workout'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import LoadingPage from './components/LoadingPage'
import Main from './components/Main'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Main />
      </Switch>
    </Router>
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

const auth_token = localStorage.getItem('auth_token')
if (auth_token) {
  store.dispatch(login())
  store.dispatch(startGetWorkouts())
  renderApp()
  if (history.location.pathname === '/') {
    history.push('/dashboard')
  }
} else {
  store.dispatch(logout())
  renderApp()
  history.push('/')
}
