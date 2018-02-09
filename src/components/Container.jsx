import Error404 from './Error404';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Container() {
  return(
    <div>
      <Switch>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default Container;
