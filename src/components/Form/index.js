import React from 'react';

import { Container } from './styles';

export default function Form({ handleCreateContainer }) {
  return (
    <Container>
      <label>Nome</label>
      <input onChange={e => handleCreateContainer(e.target.value, 'nome')}></input>
      <label>Imagem</label>
      <input onChange={e => handleCreateContainer(e.target.value, 'imagem')}></input>
      <label>Volume</label>
      <div>
        <label>Origem (PC)</label>
        <input onChange={e => handleCreateContainer(e.target.value, 'volumeOrigem')}></input>
        <label>Destino (Docker)</label>
        <input onChange={e => handleCreateContainer(e.target.value, 'volumeDestino')}></input>
      </div>
    </Container>
  );
}
