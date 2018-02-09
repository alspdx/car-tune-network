import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { carsInventory } from './carsInventory';

function CarDetails(props) {
  const car = carsInventory[props.match.params.id];
  return(
    <div>
      <h2>{car.year} {car.make} {car.model}</h2>
      <h4>Owner: {car.customerName}</h4>
      <p><strong>Reason for service:</strong> {car.reasonForService}</p>
      <Link to={`/editcar/${props.match.params.id}`}>Edit this car</Link>
    </div>
  );
}

CarDetails.propTypes = {
  match: PropTypes.object
};

export default CarDetails;
