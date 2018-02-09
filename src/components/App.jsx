import Body from './Body';
import Header from './Header';
import React from 'react';

function App(){
  return (
    <div>
      <style jsx global>{`
        :root {
          --fog: #E7E6E1;
          --cream: #F7F6E7;
          --bayblue: #537791;
        }
        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
        body {
          background: var(--fog);
        }
      `}</style>
      <Header />
      <Body />
    </div>
  );
}

export default App;
