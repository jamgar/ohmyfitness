import React from 'react'
import { connect } from 'react-redux'
import { startAddWorkout } from '../../actions/workout.js'
import WorkoutForm from './WorkoutForm'

export class AddWorkoutPage extends React.Component {
  onSubmit = (workout) => {
    this.props.startAddWorkout(workout)
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Workout</h1>
          </div>
        </div>
        <div className="content-container">
          <WorkoutForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddWorkout: (workout) => dispatch(startAddWorkout(workout))
})

export default connect(undefined, mapDispatchToProps)(AddWorkoutPage)
