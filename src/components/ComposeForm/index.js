import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import dispatches from '../../store/docker/dispatches';

import { Container } from './styles';
import Form from '../Form'

export default function ComposeForm() {
  const docker = useSelector(state => state.docker)
  const editDocker = !docker.editId
    ? 0 : docker.container.findIndex(item => item.id === docker.editId)
  const dispatch = useDispatch()

  function addContainer() {
    dispatch(dispatches.addContainer())
  }
  const handleCreateContainer = useCallback((input, key, id) => {
    return dispatch(dispatches.updateContainer(input, key, id))
  }, [dispatch])
  function handleDockerVersion(input) {
    dispatch(dispatches.updateVersion(input.target.value))
  }
  function handleEdit(id) {
    dispatch(dispatches.editContainer(id))
  }
  console.log(docker)
  return (
    <Container >
      <span>Version</span>
      <select value={docker.version} onChange={handleDockerVersion}>
        <option>3.0</option>
        <option>3.5</option>
        <option>3.7</option>
      </select>
      <p>Services</p>
      <Form onChange={handleCreateContainer} data={docker.container[editDocker]} />
      <button onClick={addContainer} >Novo compose</button>
      {docker.container.map(dock => (
        <div key={dock.id}>
          <label>{dock.nome}</label>
          <button onClick={() => handleEdit(dock.id)}>Edit</button>
        </div>
      ))}
    </Container>
  );
}
