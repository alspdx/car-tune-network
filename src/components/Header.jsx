import { Link } from 'react-router-dom';
import React from 'react';

function Header(){
  return (
    <div className='header'>
      <style jsx>{`
        .header {
          height: 70px;
          background: var(--bayblue);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--std-padding);
        }
        h1 {
          margin: 0;
        }
        ul {
          list-style: none;
          display: flex;
          padding: 0;
        }
        li:nth-child(1n+2) {
          padding-left: 20px;
        }
        a {
          color: red;
        }
      `}</style>
      <h1>Car-Tune Network</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/newcar'>Add new car</Link></li>
      </ul>
    </div>
  );
}

export default Header;
