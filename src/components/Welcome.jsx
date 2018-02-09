import { Link } from 'react-router-dom';
import React from 'react';

function Welcome() {
  return(
    <div className='welcome'>
      <style jsx>{`
        .welcome {
          padding: var(--std-padding);
        }
        ul {
          list-style: none;
        }
      `}</style>
      <h3>Welcome to Car-Tune Network!</h3>
      <span>Please select a car from the list or an option from the following menu:</span>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/newcar'>Add a new car</Link></li>
      </ul>
    </div>
  );
}

export default Welcome;
