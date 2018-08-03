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

export const startAddWorkout = (workout = {}) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/workouts`, {workout}, {
      headers: {
        Authorization: localStorage.getItem('auth_token'),
        Accept: 'application/vnd.workouts.v1+json'
      }
    })
    .then(response => {
      console.log(response.data);
      dispatch(addWorkout({...response.data}))
    })
    .catch(response => {
      console.log('Error', response);
    })
  }
}

// GET WORKOUTS
export const getWorkouts = (workouts) => ({
  type: 'GET_WORKOUTS',
  workouts
})

export const startGetWorkouts = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/workouts`, {
      headers: {
        Authorization: localStorage.getItem('auth_token'),
        Accept: 'application/vnd.workouts.v1+json'
      }
    })
    .then(response => {
      dispatch(getWorkouts(response.data))
    })
  }
}
