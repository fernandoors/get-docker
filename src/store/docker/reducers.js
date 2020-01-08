import { ACTIONS, initialContainer } from './actions';

function docker(state = ACTIONS.INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.ADD_CONTAINER:
      return {
        ...state,
        container: [
          initialContainer(),
          ...state.container
        ]
      }
    case ACTIONS.UPDATE_VERSION:
      return { ...state, version: action.version }
    case ACTIONS.UPDATE_CONTAINER:
      let container = state.container.map(docker => {
        if (docker.id === action.id) {
          docker[action.key] = action.data
        }
        return docker
      })
      return { ...state, container }
    case ACTIONS.EDIT_CONTAINER:
      return { ...state, editId: action.id }
    default:
      return state
  }
}

export default docker