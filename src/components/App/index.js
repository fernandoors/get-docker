import React from 'react';
import { Container, Flex } from './styles';
import Card from '../Card';
import { FaNodeJs, FaPython } from 'react-icons/fa'
import ComposeForm from '../ComposeForm';

function App() {

  return (
    <Container>
      <h3>Docker Compose</h3>
      <ComposeForm />

      <h3>Dockerfiles</h3>
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
