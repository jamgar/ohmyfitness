import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin } from '../../actions/auth'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }
  isInvalid = () => {
    let errors = ''
    if (this.state.email === '') {
      errors += "Email cannot be blank. "
    }
    if (this.state.password === '') {
      errors += "Password cannot be blank. "
    }
    if (errors) {
      this.setState({ error: errors })
      return true
    }
  }
  onEmailChange = (e) => {
    const email = e.target.value
    this.setState({ email })
  }
  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState({ password })
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
      this.props.startLogin(this.state)
    }
  }
  render() {
    const {
      email,
      password,
      error
    } = this.state
    return (
      <div>
        <div className="page-header page-header--centered">
          <div className="content-container">
            <h1 className="page-header__title">Login</h1>
          </div>
        </div>
        <div className="content-container content-container--sm">
          <form className="form" onSubmit={this.onSubmit}>
            {this.renderAlert() && <p className="form__error">{this.renderAlert()}</p>}
            <input
              type="email"
              className="text-input"
              placeholder="Email"
              autoFocus
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
            <button type="submit" className="button">
              Log In
            </button>
          </form>
          <Link className="link" to="/">
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
  startLogin: (formProps) => dispatch(startLogin(formProps))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
