import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/dashboard">
              <h1>Oh My Fitness</h1>
            </Link>
            <button className="button button--link" onClick={startLogout}>Logout</button>
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
