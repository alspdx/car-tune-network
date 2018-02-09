import CarsList from './CarsList';
import Error404 from './Error404';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';

function Body() {
  return(
    <div className="body-wrapper">
      <style jsx>{`
        .body-wrapper {
          display: flex;
        }
      `}</style>
    <CarsList />
      <Switch>
        <Route path='/' component={Welcome}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default Body;
