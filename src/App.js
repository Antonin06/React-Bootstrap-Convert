import React, {useState} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
    return (km/1.609).toFixed(1);
  }

  return <div className="text-center">
  <input type="text" class="form-control" value={km} onChange={handleChange} placeholder="KM" />
  <h3>=<h2 className="text-danger"> {convert(km)} miles </h2></h3>
  </div>;
}

function ConverterEuroToDollars() {
  const [euro, setEuro] = useState('');

  function EuroChange(e) {
    setEuro(e.target.value);
  }
  function convertEuro(euro) {
    return (euro/0.82).toFixed(0);
  }

  return <div className="text-center">
  <input type="text" class="form-control" value={euro} onChange={EuroChange} placeholder="€" />
  <h3>=<h2 className="text-danger"> {convertEuro(euro)} $ </h2></h3>
  </div>;
}

  function DecimalToBinaire() {
    const [decimal, setDecimal] = useState('0');
    const [binary, setBinary] = useState('0');

    function DecimalChange(e) {
      setDecimal(e.target.value);
    }
    function BinaryChange(e) {
      setBinary(e.target.value);
    }
    function convertDecimal(decimal) {
      return parseInt(decimal).toString(2);
    }
    function convertBinary(binary) {
      return parseInt(binary, 2);
    }

    return <div className="text-center">
    <div class="card-body">
    <h2 class="card-title mt-2"><span class="badge badge-danger text-dark">Decimal to Binary</span></h2>
    <input type="text" class="form-control" value={decimal} onChange={DecimalChange} placeholder="123" />
    <h3>=<h2 className="text-danger">{convertDecimal(decimal)}</h2></h3>
    <hr/>
    <h2 class="card-title mt-2"><span class="badge badge-danger text-dark">Binary to Decimal</span></h2>
    <input type="integer" class="form-control" value={binary} onChange={BinaryChange} placeholder="123" />
    <h3>=<h2 className="text-danger">{convertBinary(binary)}</h2></h3>
    </div>
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
      <CardDeck className="row row-cols-1 row-cols-md-3 row-cols-md-2">

      <Card className="shadow">
      <Card.Body>
      <Card.Title className="text-center border-bottom text-danger">KM to Miles </Card.Title>
      <Card.Text className="mt-4">
      <Converter />
      </Card.Text>
      </Card.Body>
      </Card>

      <Card className="shadow">
      <Card.Body>
      <Card.Title className="text-center border-bottom text-danger">€ to $</Card.Title>
      <Card.Text className="mt-4">
      <ConverterEuroToDollars />
      </Card.Text>
      </Card.Body>
      </Card>

      <Card className="shadow">
      <DecimalToBinaire />
      </Card>


      </CardDeck>
      </Container>
      </>
    );
  }

  export default App;
