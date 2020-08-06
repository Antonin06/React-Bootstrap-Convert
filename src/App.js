import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Jumbotron, Container, Button } from 'react-bootstrap';
import Navigation from './Nav';
import Meteo from './Meteo';
import Convert from './Convert';




// https://riptutorial.com/fr/react-router#:~:text=React%20Router%20est%20une%20biblioth%C3%A8que%20de%20routage%20populaire,Il%20a%20%C3%A9t%C3%A9%20initialement%20inspir%C3%A9%20du%20routeur%20Ember.
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
