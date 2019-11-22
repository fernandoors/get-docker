import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Dispatches from '../../store/dispatches';
import { Container } from './styles';

function App() {
  const container = useSelector(state => state)
  const dispath = useDispatch()

  function addContainer() {
    dispath(Dispatches.addContainer({ container: 'react', port: 8080, network: 'front' } ))
  }
  return (
    <Container>
      {container.map(item => <div key={item.container}>
        <p>{item.container}</p>
        <p>{item.port}</p>
        <p>{item.network}</p>
      </div>)}
      <button onClick={addContainer}>Novo</button>
      <a href="assets/templates/node.txt" download="Dockerfile">Download Node Dockerfile</a>
    </Container>
  );
}

export default App;
