import { carsInventory } from './carsInventory';
import { Link } from 'react-router-dom';
import React from 'react';

function CarsList() {
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
        {carsInventory.map((car, index) =>
          <h4 key={index}><Link to={`/details/${index}`}>{car.year} {car.make} {car.model}</Link></h4>
        )}
      </div>
    </div>
  );
}

export default CarsList;
