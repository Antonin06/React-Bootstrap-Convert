import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, Jumbotron, Container, CardDeck, Card } from 'react-bootstrap';
import Converter from './Component/KmToMiles';
import ConverterEuroToDollars from './Component/EuroToDollars';
import DecimalToBinaire from './Component/DecimalToBinary';

// https://riptutorial.com/fr/react-router#:~:text=React%20Router%20est%20une%20biblioth%C3%A8que%20de%20routage%20populaire,Il%20a%20%C3%A9t%C3%A9%20initialement%20inspir%C3%A9%20du%20routeur%20Ember.
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
    <Nav>
    <Nav.Link className="text-white" href="/">Home</Nav.Link>
    <Nav.Link className="text-white" href="/meteo">Méteo</Nav.Link>
    <Route path="/" component={App}/>
    <Route path="/meteo" component={Meteo}/>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </BrowserRouter>

    <Jumbotron>
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
  );
}

const Meteo = () => (
  <div>
  <p>We are now on the Méteo page</p>
  </div>
)

export default App;
