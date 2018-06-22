import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { SingleDatePicker } from 'react-dates'

const now = moment()

export default class WorkoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.emptyExercise = {
      id: null,
      name: '',
      _destroy: false
    }
    this.state = {
      title: props.workout ? props.workout.title : '',
      workout_date: props.workout ? moment(props.workout.workout_date) : moment(),
      note: props.workout ? props.workout.note : '',
      calendarFocused: false,
      error: '',
      exercises_attributes: props.workout ? props.workout.exercises_attributes : [Object.assign({}, this.emptyExercise)]
    }
  }
  isInvalid = () => (
    this.state.title === '' || this.state.workout_date === ''
  )
  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onDateChange = (workout_date) => {
    if (workout_date) {
      this.setState(() => ({ workout_date }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  handleAddExercise = (e) => {
    const exercises = this.state.exercises_attributes
    e.preventDefault()
    if (exercises[exercises.length - 1]["name"] === "") {
      this.setState(() => ({ error: 'Please enter an exercise.'}))
    } else {
      this.setState(() => ({ error: ''}))
      exercises.push(Object.assign({}, this.emptyExercise))
    }
    this.setState(() => ({ exercises_attributes: exercises }))
  }
  onExerciseChange = (e, exercise) => {
    exercise.name = e.target.value
    this.setState(() => ({ exercises_attributes: this.state.exercises_attributes }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    const {
      title,
      note,
      workout_date,
      exercises_attributes
    } = this.state

    if (this.isInvalid()) {
      this.setState(() => ({ error: 'Title and Workout Date cannot be blank.'}))
    } else {
      const exercises = this.state.exercises_attributes.filter((exercise) => exercise.name !== "")
      this.setState(() => { error: '' })
      this.props.onSubmit({
        title,
        workout_date: workout_date.valueOf(),
        note,
        exercises_attributes: exercises
      })
    }
  }

  // need to seperate form and list
  renderExercisesForm() {
    return this.state.exercises_attributes.map((exercise, index) => {
      if (exercise._destroy === false) {
        let exerciseForm = (
          <div className="form" key={index}>
            <input
              type="text"
              className="text-input"
              placeholder="Exercise Name"
              onChange={e => this.onExerciseChange(e, exercise)}
              value={exercise.name}
            />
          </div>
        )
        return exerciseForm
      } else {
        return null
      }
    })
  }
  render() {
    const {
      title,
      workout_date,
      note,
      calendarFocused,
      error
    } = this.state
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {error && <p className="form__error">{error}</p>}
        <input
          type="text"
          className="text-input"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={this.onTitleChange}
        />
        <SingleDatePicker
          date={workout_date}
          onDateChange={this.onDateChange}
          focused={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add a note (optional)"
          value={note}
          onChange={this.onNoteChange}
        />
        <div>
          <h3>Exercises</h3>
          <button
          className="button button--info button--margin-bottom"
          onClick={this.handleAddExercise}>
          + Add Exercise
          </button>
          {this.renderExercisesForm()}
        </div>
        <div>
          <button className="button button--margin-right">Save Workout</button>
          <Link className="button button--secondary" to="/dashboard">
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}
