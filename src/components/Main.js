import React from 'react'
import AppRouter, { history } from '../routers/AppRouter'
import Header from './Header'

// const App = () => (
//   <div>
//     <Header />
//     <AppRouter />
//   </div>
// )

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AppRouter />
      </div>
    )
  }
}

export default Main
