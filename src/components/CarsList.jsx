import React from 'react';

const carsInShopList = [
  {
    year: '1977',
    make: 'Volkswagen',
    model: 'Rabbit',
    color: 'White',
    customerName: 'Joe Blow',
    reasonForService: ''
  },
  {
    year: '1995',
    make: 'Volkswagen',
    model: 'Jetta GLX',
    color: 'Red',
    customerName: 'John Doe',
    reasonForService: ''
  },
  {
    year: '2015',
    make: 'Volkswagen',
    model: 'Tiguan',
    color: 'Silver',
    customerName: 'Firstname Lastname',
    reasonForService: ''
  },
  {
    year: '1980',
    make: 'Audi',
    model: 'Quattro',
    color: 'Black',
    customerName: 'Your Mother',
    reasonForService: ''
  },
  {
    year: '1987',
    make: 'Volkswagen',
    model: 'Vanagon',
    color: 'Charcoal',
    customerName: 'Beep Boop',
    reasonForService: ''
  },
];

function CarsList() {
  return(
    <div className="cars-list">
      <style jsx>{`
        .cars-list {
          flex-basis: 20%;
          background: var(--cream);
          padding: var(--std-padding);
          height: 100%;
        }
      `}</style>
      <h2>Current Inventory:</h2>
      <div>
        {carsInShopList.map((car, index) =>
          <h4 key={index}>{car.year} {car.make} {car.model}</h4>
        )}
      </div>
    </div>
  );
}

export default CarsList;
