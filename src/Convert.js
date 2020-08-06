import React from 'react';
import './App.css';
import { Jumbotron, Container, CardDeck, Card } from 'react-bootstrap';
import Converter from './Component/KmToMiles';
import ConverterEuroToDollars from './Component/EuroToDollars';
import DecimalToBinaire from './Component/DecimalToBinary'


const Convert = () => {
  return (
    <>

    <Jumbotron className="bg-warning">
    <Container>
    <h1 className="text-center">Convertisseur Divers</h1>
    <p className="text-center">First try Bootstrap w/ React</p>
    </Container>
    </Jumbotron>

    <Container>
    <CardDeck className="row row-cols-1 row-cols-md-3 row-cols-md-2">

    <Card className="shadow">
    <Converter />
    </Card>

    <Card className="shadow">
    <ConverterEuroToDollars />
    </Card>

    <Card className="shadow">
    <DecimalToBinaire />
    </Card>

    </CardDeck>
    </Container>
    </>
  )
}

export default Convert;
