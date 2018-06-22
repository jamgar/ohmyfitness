import axios from 'axios'
import { history } from '../routers/AppRouter'
import {
  ROOT_URL,
  ADD_WORKOUT,
} from '../constants'

// ADD WORKOUT
export const addWorkout = (workout) => ({
  type: ADD_WORKOUT,
  workout
})

export const startAddWorkout = (workout) => {
  console.log('Workout', workout);
  return (dispatch) => {
    axios.post(`${ROOT_URL}/workouts`, {workout}, {
      headers: {
        Authorization: localStorage.getItem('auth_token'),
        Accept: 'application/vnd.workouts.v1+json'
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(response => {
      console.log('Error', response);
    })
  }
}
