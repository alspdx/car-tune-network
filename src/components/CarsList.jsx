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
      {Object.keys(props.inventoryList).map(function(carKey) {
        const thisCar = props.inventoryList[carKey];
        return <h4 key={carKey} onClick={(carKey) => {props.onSelectingCar(carKey);}}>{thisCar.year} {thisCar.make} {thisCar.model}</h4>;
      })}
    </div>
  );
}

CarsList.propTypes = {
  inventoryList: PropTypes.object,
  onSelectingCar: PropTypes.func
};

export default CarsList;
