import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../components/Home'
// Auth
import SignupPage from '../components/auth/SignupPage'
import LoginPage from '../components/auth/LoginPage'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Home} exact={true}/>
        <PublicRoute path="/login" component={LoginPage}/>
        <PublicRoute path="/signup" component={SignupPage}/>
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
