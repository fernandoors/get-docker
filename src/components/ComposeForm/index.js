import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Dispatches from '../../store/dispatches';
import { Container } from './styles';
import Form from '../Form'
export default function ComposeForm() {
  const [createContainer, setCreateContainer] = useState({ version: '3.0', nome: '', imagem: '', volumeOrigem: '', volumeDestino: '' })
  const container = useSelector(state => state)
  const dispath = useDispatch()

  function addContainer() {
    dispath(Dispatches.addContainer(createContainer))
  }
  function handleCreateContainer(input, key) {
    createContainer[key] = input
    setCreateContainer(createContainer)
  }
  
  return (
    <Container >
        <span>Version</span>
        <select value={createContainer.version} onChange={e => handleCreateContainer(e.target.value, 'version')}>
          <option>3.0</option>
          <option>3.5</option>
          <option>3.7</option>
        </select>
        <span>Services</span>
        <Form handleCreateContainer={handleCreateContainer} />
        <button onClick={addContainer} >Novo compose</button>
      {JSON.stringify(container)}
    </Container>
  );
}
