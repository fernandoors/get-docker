import { ACTIONS } from "./actions";

class Dispatches {
  addContainer = (container) => {
    return { type: ACTIONS.ADD_CONTAINER, container }
  }
}

export default new Dispatches()