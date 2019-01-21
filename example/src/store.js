import {createStore} from 'redux'
import {history} from 'react-config-router'

const initState = {
  isAuthenticated: false,
  currentAuthority: 'guest'
}

const reducer = (state = initState, {type}) => {
  switch (type) {
    case 'login':
      // ...
      history.replace('/')
      return {
        isAuthenticated: true,
        currentAuthority: 'user'
      }
    case 'logout':
      return {
        isAuthenticated: false,
        currentAuthority: 'guest'
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
