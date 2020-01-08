import React from 'react';

import { Container } from './styles';

function Form({ onChange, data }) {
  const { id } = data
  return (
    <Container>
      <label>Nome</label>
      <input
        onChange={e => onChange(e.target.value, 'nome', id)}
        value={data.nome}
      >
      </input>
      <label>Imagem</label>
      <input
        onChange={e => onChange(e.target.value, 'imagem', id)}
        value={data.imagem}
      >
      </input>
      <label>Volume</label>
      <div>
        <label>Origem (PC)</label>
        <input
          onChange={e => onChange(e.target.value, 'volumeOrigem', id)}
          value={data.volumeOrigem}
        >
        </input>
        <label>Destino (Docker)</label>
        <input
          onChange={e => onChange(e.target.value, 'volumeDestino', id)}
          value={data.volumeDestino}
        >
        </input>
      </div>
    </Container>
  );
}

export default Form