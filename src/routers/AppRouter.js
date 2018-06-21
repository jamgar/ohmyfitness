import React from 'react'
import { Route, Switch } from 'react-router-dom'
import history from '../history'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../components/Home'
// Auth
import SignupPage from '../components/auth/SignupPage'
import LoginPage from '../components/auth/LoginPage'
// Workout
import AddWorkoutPage from '../components/Workout/AddWorkoutPage.js'

const AppRouter = () => (
  <div>
    <Switch>
      <PublicRoute path="/" component={Home} exact={true}/>
      <PublicRoute path="/login" component={LoginPage}/>
      <PublicRoute path="/signup" component={SignupPage}/>
      <PrivateRoute path="/dashboard" component={DashboardPage}/>

      <PrivateRoute path="/create-workout" component={AddWorkoutPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
)

export default AppRouter
