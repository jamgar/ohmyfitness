import { GET_WORKOUTS, ADD_WORKOUT } from '../constants.js'

const workoutsReducerDefaultState = []

export default (state = workoutsReducerDefaultState, action) => {
  switch (action.type) {
    case GET_WORKOUTS:
      return action.workouts
      break;
    case ADD_WORKOUT:
    console.log('Action', action.wokout);
      return [
        ...state,
        action.workout
      ]
      break;
    default:
      return state
  }
}
