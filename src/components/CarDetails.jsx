import PropTypes from 'prop-types';
import React from 'react';
import { carsInventory } from './carsInventory';

function CarDetails(props) {

  return(
    <div>
      <h1>{props.match.params.id}</h1>
    </div>
  );
}

CarDetails.propTypes = {
  match: PropTypes.object
};

export default CarDetails;
