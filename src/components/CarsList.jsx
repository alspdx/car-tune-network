import { carsInventory } from './carsInventory';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function CarsList(props) {
  return(
    <div className="cars-list">
      <style jsx>{`
        .cars-list {
          flex-basis: 20%;
          background: var(--cream);
          padding: var(--std-padding);
          height: 100%;
        }`}</style>
      <h2>Current Inventory:</h2>
      <div>
        {Object.keys(props.inventoryList).map((carKey) =>
          const thisCar = props.inventoryList[carKey]
          <h4 key={index}><Link to={`/detail`}>{thisCar.year} {thisCar.make} {thisCar.model}</Link></h4>
        )}
      </div>
    </div>
  );
}

CarsList.propTypes = {
  inventoryList: PropTypes.object
};

export default CarsList;
