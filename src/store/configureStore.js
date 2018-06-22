import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import workoutsReducer from '../reducers/workouts'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      workouts: workoutsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
