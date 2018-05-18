import authReducer from '../../reducers/auth'

test('should set login with user uid', () => {
  const action = {
    type: 'LOGIN',
    uid: 1234567890
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

test('should set logout', () => {
  const action = { type: 'LOGOUT'}
  const state = authReducer({ uid: 1234567890 }, action)
  expect(state).toEqual({})
})
