import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export class Header extends React.Component {
  renderLinks = () => {
    if (this.props.authenticated) {
      return (
        <div>
          <button className="button button--link" onClick={this.props.startLogout}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link className="button button--link" to="/login">Log In</Link>
          <Link className="button button--link" to="/signup">Sign Up</Link>
        </div>
      )
    }
  }
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/dashboard">
              <h1>Oh My Fitness</h1>
            </Link>
            <div className="header__link-right">
              {this.renderLinks()}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
})

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
