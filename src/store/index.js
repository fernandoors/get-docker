import { combineReducers, createStore } from 'redux'

import docker from './docker/reducers'

const reducers = combineReducers({
  docker
})

export const store = createStore(reducers)
