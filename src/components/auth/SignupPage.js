import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startSignup } from '../../actions/auth'

export class SignupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    }
  }
  render() {
    return (
      <h1>SignupPage</h1>
    )
  }
}

export default SignupPage
