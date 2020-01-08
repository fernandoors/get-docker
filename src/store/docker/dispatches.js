import { ACTIONS } from "./actions";

class Dispatches {
  addContainer = () => {
    return { type: ACTIONS.ADD_CONTAINER }
  }
  updateVersion = (version) => {
    return { type: ACTIONS.UPDATE_VERSION, version }
  }
  updateContainer = (data, key, id) => {
    return { type: ACTIONS.UPDATE_CONTAINER, data, key, id }
  }
  editContainer = (id) => {
    return { type: ACTIONS.EDIT_CONTAINER, id }
  }
}

export default new Dispatches()