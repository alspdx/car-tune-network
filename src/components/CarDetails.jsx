

import PropTypes from 'prop-types';
import React from 'react';

function CarDetails(props) {
  console.log(props.carToShow);
  return(
    <div className='car-details'>
      <style jsx>{`
        .car-details {
          padding: var(--std-padding);
          width: 100%;
        }`}</style>
      <h2>{props.carToShow.year} {props.carToShow.make} {props.carToShow.model}</h2>
      <h4>Owner: {props.carToShow.customerName}</h4>
      <p><strong>Reason for service:</strong> {props.carToShow.reasonForService}</p>
    </div>
  );
}

CarDetails.propTypes = {
  carToShow: PropTypes.object
};

export default CarDetails;
