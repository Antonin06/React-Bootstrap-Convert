import React from 'react';
import './App.css';
import { Jumbotron, Container, Button } from 'react-bootstrap';


const Meteo = () => (
  <Jumbotron className="bg-info">
  <Container>
  <h1 className="text-center">Méteo</h1>
  <p className="text-center">First try Bootstrap w/ React</p>
  </Container>
  </Jumbotron>
)

export default Meteo;
