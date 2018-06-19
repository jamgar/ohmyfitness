import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startSignup, authError } from '../../actions/auth'

export class SignupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    }
    this.props.clearAuthErrors()
  }
  isInvalid = () => {
    let errors = ''
    if (this.state.name === '') {
      errors = "Name cannot be blank. "
    }
    if (this.state.email === '') {
      errors += "Email cannot be blank. "
    }
    if (this.state.password === '') {
      errors += "Password cannot be blank. "
    }
    if (this.state.password !== this.state.passwordConfirmation) {
      errors += "Passwords do not match."
    }

    if (errors) {
      this.setState({ error: errors })
      return true
    }
  }
  onNameChange = (e) => {
    const name = e.target.value
    this.setState({ name })
  }
  onEmailChange = (e) => {
    const email = e.target.value
    this.setState({ email })
  }
  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState({ password })
  }
  onPasswordConfirmationChange = (e) => {
    const passwordConfirmation = e.target.value
    this.setState({ passwordConfirmation })
  }
  renderAlert = () => {
    let errors
    errors = this.props.errorMessage ? this.props.errorMessage : ''
    errors += this.state.error ? this.state.error : ''
    return errors
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!this.isInvalid()) {
      this.setState({ error: '' })
      this.props.startSignup(this.state)
    }
  }
  render() {
    const {
      name,
      email,
      password,
      passwordConfirmation,
      error
    } = this.state
    return (
      <div>
        <div className="page-header page-header--centered">
          <div className="content-container">
            <h1 className="page-header__title">Sign Up</h1>
          </div>
        </div>
        <div className="content-container content-container--sm">
          <form className="form" onSubmit={this.onSubmit}>
            {this.renderAlert() && <p className="form__error">{this.renderAlert()}</p>}
            <input
              type="text"
              className="text-input"
              placeholder="Name"
              autoFocus
              value={name}
              onChange={this.onNameChange}
            />
            <input
              type="email"
              className="text-input"
              placeholder="Email Address"
              value={email}
              onChange={this.onEmailChange}
            />
            <input
              type="password"
              className="text-input"
              placeholder="Password"
              value={password}
              onChange={this.onPasswordChange}
            />
            <input
              type="password"
              className="text-input"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              onChange={this.onPasswordConfirmationChange}
            />
            <button type="submit" className="button">
              Sign Up
            </button>
          </form>
          <Link className="link" to='/'>
          Cancel
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.auth.error
})

const mapDispatchToProps = (dispatch) => ({
  startSignup: (formProps) => dispatch(startSignup(formProps)),
  clearAuthErrors: () => dispatch(authError(""))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
