import React from 'react';

const carsInShopList = [
  {
    year: '1977',
    make: 'Volkswagen',
    model: 'Rabbit'
  },
  {
    year: '1995',
    make: 'Volkswagen',
    model: 'Jetta GLX'
  },
  {
    year: '2015',
    make: 'Volkswagen',
    model: 'Tiguan'
  },
  {
    year: '1980',
    make: 'Audi',
    model: 'Quattro'
  },
  {
    year: '1987',
    make: 'Volkswagen',
    model: 'Vanagon'
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
      <div>
        {carsInShopList.map((car, index) =>
          <h4 key={index}>{car.year} {car.make} {car.model}</h4>
        )}
      </div>
    </div>
  );
}

export default CarsList;
