import CarDetails from './CarDetails';
import CarsList from './CarsList';
import Error404 from './Error404';
import NewCar from './NewCar';
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
        <Route exact path='/' component={Welcome}/>
        <Route path='/details' component={CarDetails}/>
        <Route path='/newcar' component={NewCar}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default Body;
