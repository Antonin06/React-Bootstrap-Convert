import React, {useState} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Converter() {
  const [km, setKm] = useState('');

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km/1.609).toFixed(2);
  }

  return <div className="text-center">
  <input type="text" value={km} onChange={handleChange} placeholder="KM" />
  <p> {km} km is {convert(km)} miles </p>
  </div>;
}

function ConverterEuroToDollars() {
  const [euro, setEuro] = useState('');

  function EuroChange(e) {
    setEuro(e.target.value);
  }
  function convertEuro(euro) {
    return (euro/0.82).toFixed(2);
  }

  return <div className="text-center">
  <input type="text" value={euro} onChange={EuroChange} placeholder="€" />
  <p> {euro} Euro = {convertEuro(euro)} Dollars </p>
  </div>;
}

var ConvertBase = function (num) {
  return {
    from : function (baseFrom) {
      return {
        to : function (baseTo) {
          return parseInt(num, baseFrom).toString(baseTo);
        }
      };
    }
  }
}

  function DecimalToBinaire() {
    const [decimal, setDecimal] = useState('');

    function DecimalChange(e) {
      setDecimal(e.target.value);
    }
    function convertDecimal(decimal) {
      return ConvertBase(decimal).from(10).to(2);
    }

    return <div className="text-center">
    <input type="text" value={decimal} onChange={DecimalChange} placeholder="123" />
    <h3>=<h2 className="text-danger">{convertDecimal(decimal)}</h2></h3>
    </div>;
  }

  function App() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
      <Nav>
      <Nav.Link className="text-white" href="./">Home</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>

      <Jumbotron>
      <Container>
      <h1 className="text-center">Convertisseur Divers</h1>
      <p className="text-center">First try Bootstrap w/ React</p>
      </Container>
      </Jumbotron>

      <Container>
      <CardDeck>

      <Card>
      <Card.Body>
      <Card.Title className="text-center border-bottom text-danger">KM to Miles </Card.Title>
      <Card.Text className="mt-4">
      <Converter />
      </Card.Text>
      </Card.Body>
      </Card>

      <Card>
      <Card.Body>
      <Card.Title className="text-center border-bottom text-danger">€ to $</Card.Title>
      <Card.Text className="mt-4">
      <ConverterEuroToDollars />
      </Card.Text>
      </Card.Body>
      </Card>

      <Card>
      <Card.Body>
      <Card.Title className="text-center border-bottom text-danger">Décimal to Binary</Card.Title>
      <Card.Text className="mt-4">
      <DecimalToBinaire />
      </Card.Text>
      </Card.Body>
      </Card>

      </CardDeck>
      </Container>
      </>
    );
  }

  export default App;
