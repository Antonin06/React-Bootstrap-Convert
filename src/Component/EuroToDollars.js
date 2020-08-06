import React, {useState} from 'react';


const ConverterEuroToDollars = (props) => {
  const [euro, setEuro] = useState('');

  function EuroChange(e) {
    setEuro(e.target.value);
  }
  function convertEuro(euro) {
    return (euro/0.82).toFixed(0);
  }

  return (
  <div className="text-center">
    <div className="card-body">
      <h2 className="card-title mt-2"><span className="badge badge-danger text-dark">€ to $</span></h2>
      <input type="text" className="form-control" value={euro} onChange={EuroChange} placeholder="€" />
      <h2 className="text-danger mt-3">= {convertEuro(euro)} $ </h2>
    </div>
  </div>
)}

export default ConverterEuroToDollars;
