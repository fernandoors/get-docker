import { createStore } from 'redux'
import { ACTIONS } from './actions';

function docker(state = ACTIONS.INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.ADD_CONTAINER:
      return [...state, action.container]
    default:
      return state
  }
}

const store = createStore(docker)

export default store