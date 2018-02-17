import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

function CarDetails(props) {
  const { year, make, model, customerName, reasonForService } = props.carToShow;
  return(
    <div className='car-details'>
      <style jsx>{`
        .car-details {
          padding: var(--std-padding);
          width: 100%;
        }`}</style>
      {props.carToShow ? (
        <div>
          <h2>{year} {make} {model}</h2>
          <h4>Owner: {customerName}</h4>
          <p><strong>Reason for service:</strong> {reasonForService}</p>
          <Link to='/editcar'>Edit Car</Link>
        </div>
      ) : (
        <h2>Please select a vehicle from the list to see details.</h2>
      )}
    </div>
  );
}

CarDetails.propTypes = {
  carToShow: PropTypes.object
};

export default CarDetails;
