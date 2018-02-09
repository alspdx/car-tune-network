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
          padding: var(--std-padding);
        }
        h1 {
          margin: 0;
        }
      `}</style>
      <h1>Car-Tune Network</h1>
    </div>
  );
}

export default Header;
