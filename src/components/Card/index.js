import React from 'react'
import { Container, Cards } from './styles'


export default function Card({ icon, url }) {
  return (
    <Container>
      <a href={url} download="Dockerfile">
        <Cards>
          {icon}
        </Cards>
      </a>
    </Container>
  )
} 