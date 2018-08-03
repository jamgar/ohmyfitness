import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DashboardPage extends React.Component {
  renderWorkoutList() {
    const { workouts } = this.props
    if (workouts) {
      let wokoutList = workouts.map((workout) => {
        return <li key={workout.id}>{workout.title}</li>
      })
      return wokoutList
    }
  }
  render() {
    return (
      <div>
        DashboardPage content
        <Link className="button" to="/create-workout">Add Workout</Link>
        <ul>
          {this.renderWorkoutList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
}
export default connect(mapStateToProps)(DashboardPage)
