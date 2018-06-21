import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { SingleDatePicker } from 'react-dates'

const now = moment()

export default class WorkoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.workout ? props.expense.title : '',
      workout_date: props.workout ? moment(props.workout.workout_date) : moment(),
      note: props.workout ? props.workout.note : '',
      calendarFocused: false,
      error: ''
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
      this.setState = ({ workout_date })
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    const {
      title,
      note,
      workout_date
    } = this.state

    if (this.isInvalid()) {
      this.setState(() => ({ error: 'Title and Workout Date cannot be blank.'}))
    } else {
      this.setState(() => { error: '' })
      this.props.onSubmit({
        title,
        workout_date: workout_date.valueOf(),
        note
      })
    }
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
        <p>Add Exercises will go here</p>
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
