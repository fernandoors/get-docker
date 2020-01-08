import { mongoObjectId } from "../../common/helpers";
export const initialContainer = () => ({ id: mongoObjectId(), nome: '', imagem: '', volumeOrigem: '', volumeDestino: '' })
export const ACTIONS = {
  INITIAL_STATE:
  {
    version: '3.7',
    container: [
      initialContainer()
    ],
    editId: ''
  },
  ADD_CONTAINER: 'ADD_CONTAINER',
  UPDATE_VERSION: 'UPDATE_VERSION',
  UPDATE_CONTAINER: 'UPDATE_CONTAINER',
  EDIT_CONTAINER: 'EDIT_CONTAINER',
  REMOVE_CONTAINER: 'REMOVE_CONTAINER',
}
