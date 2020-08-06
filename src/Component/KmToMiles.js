import React, {useState} from 'react';

const Converter = (props) => {
  const [km, setKm] = useState('');

  function handleChange(e) {
    setKm(e.target.value);
  }

  function convert(km) {
    return (km/1.609).toFixed(1);
  }

  return (
    <div className="text-center">
      <div className="card-body">
        <h2 className="card-title mt-2"><span className="badge badge-danger text-dark">KM To Miles</span></h2>
        <input type="text" className="form-control" value={km} onChange={handleChange} placeholder="KM" />
        <h2 className="text-danger mt-3">= {convert(km)} miles </h2>
      </div>
    </div>
  )}

  export default Converter;
