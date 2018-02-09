import { Link } from 'react-router-dom';
import React from 'react';

function Header(){
  return (
    <div>
      <h1>KomBuBu</h1>
      <ul>
        <li><Link to=''>Home</Link></li>
      </ul>
    </div>
  );
}

export default Header;
