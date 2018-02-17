import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

function CarsList(props) {
  return(
    <div className="cars-list">
      <style jsx>{`
        .cars-list {
          flex-basis: 20%;
          background: var(--cream);
          padding: var(--std-padding);
          height: 100%;
        }
        h4:hover {
          cursor: pointer;
        }`}</style>
      <h2>Current Inventory:</h2>
      {Object.keys(props.inventoryList).map(function(carKey) {
        const thisCar = props.inventoryList[carKey];
        return <h4 key={carKey} onClick={() => props.onSelectingCar(carKey)}><Link to='/details'>{thisCar.year} {thisCar.make} {thisCar.model}</Link></h4>;
      })}
    </div>
  );
}

CarsList.propTypes = {
  inventoryList: PropTypes.object,
  onSelectingCar: PropTypes.func
};

export default CarsList;
