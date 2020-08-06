import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Jumbotron, Container, Button } from 'react-bootstrap';
import Navigation from './Nav';
import Meteo from './Meteo';
import Convert from './Convert';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Meteo" component={Meteo} />
        <Route path="/Convert" component={Convert} />
      </Switch>
    </Router>
  )
}

const Home = () => (
  <Jumbotron className="bg-danger">
    <Container>
      <h1 className="text-center">Home</h1>
      <p className="text-center">First try Bootstrap w/ React</p>
    </Container>
  </Jumbotron>
);

export default App;
