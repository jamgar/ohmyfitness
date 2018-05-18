export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      }
      break;
    case 'LOGOUT':
      return {}
      break;
    default:
      return state
  }
}
