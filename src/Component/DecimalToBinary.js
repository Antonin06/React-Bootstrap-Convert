import React, {useState} from 'react';

const DecimalToBinaire = () => {
  const [decimal, setDecimal] = useState('0');
  const [binary, setBinary] = useState('0');

  function DecimalChange(e) {
    setDecimal(e.target.value);
  }
  function BinaryChange(e) {
    setBinary(e.target.value);
  }
  function convertDecimal(decimal) {
    if (decimal === "") {
      return "0"
    }
    return parseInt(decimal).toString(2);
  }

  function convertBinary(binary) {
    if (binary === "") {
      return "0"
    }
    return parseInt(binary, 2);
  }

  return (
  <div className="text-center">
    <div className="card-body">
      <h2 className="card-title mt-2"><span className="badge badge-danger text-dark">Decimal to Binary</span></h2>
      <input type="text" className="form-control" value={decimal} onChange={DecimalChange} placeholder="0" />
        <h2 className="text-danger mt-3">= {convertDecimal(decimal)}</h2>
        <hr/>
        <h2 className="card-title mt-2"><span className="badge badge-danger text-dark">Binary to Decimal</span></h2>
      <input type="integer" className="form-control" value={binary} onChange={BinaryChange} placeholder="0" />
      <h2 className="text-danger mt-3">= {convertBinary(binary)}</h2>
    </div>
  </div>
)}

export default DecimalToBinaire;
