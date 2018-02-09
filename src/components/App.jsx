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
          --deepash: #3f3f3c;
          --std-padding: 20px;
        }
        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
        body {
          background: var(--fog);
          color: var(--deepash);
          height: 100vh;
          margin: 0;
        }
        #react-app-root {
          height: 100%;
        }
        [data-reactroot] {
          height: 100%;
        }
      `}</style>
      <Header />
      <Body />
    </div>
  );
}

export default App;
