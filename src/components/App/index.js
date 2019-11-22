import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Dispatches from '../../store/dispatches';
import { Container, Flex } from './styles';
import Card from '../Card';
import { FaNodeJs, FaPython } from 'react-icons/fa'

function App() {
  const container = useSelector(state => state)
  const dispath = useDispatch()

  function addContainer() {
    dispath(Dispatches.addContainer({ container: 'react', port: 8080, network: 'front' }))
  }
  return (
    <Container>
      {container.map(item => <div key={item.container}>
        <p>{item.container}</p>
        <p>{item.port}</p>
        <p>{item.network}</p>
      </div>)}
      <button onClick={addContainer}>Novo</button>
      <Flex>
        <Card
          icon={<FaNodeJs />}
          url="assets/templates/node.txt"
        />
        <Card
          icon={<FaPython />}
          url="assets/templates/python.txt"
        />
      </Flex>
    </Container>
  );
}

export default App;
