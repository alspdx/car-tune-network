

import PropTypes from 'prop-types';
import React from 'react';

function CarDetails(props) {
  return(
    <div className='car-details'>
      <style jsx>{`
        .car-details {
          padding: var(--std-padding);
          width: 100%;
      }`}</style>
      {props.carToShow ? (
        <div>
          <h2>{props.carToShow.year} {props.carToShow.make} {props.carToShow.model}</h2>
          <h4>Owner: {props.carToShow.customerName}</h4>
          <p><strong>Reason for service:</strong> {props.carToShow.reasonForService}</p>
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
