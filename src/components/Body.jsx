import CarDetails from './CarDetails';
import CarsList from './CarsList';
import EditCar from './EditCar';
import Error404 from './Error404';
import { masterFirebaseConfig } from './../api-keys';
import NewCar from './NewCar';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Welcome from './Welcome';
import firebase from 'firebase';
import Rebase from 're-base';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
var app = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(app.database());

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCar: null,
      inventoryList: {}
    };
    this.handleSelectingCar = this.handleSelectingCar.bind(this);
    this.handleDeletingVehicle = this.handleDeletingVehicle.bind(this);
    this.handleNewVehicleSubmit = this.handleNewVehicleSubmit.bind(this);
    this.handleEditingVehicleState = this.handleEditingVehicleState.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    base.syncState('inventoryList', {
      context: this,
      state: 'inventoryList'
    });
  }

  handleNewVehicleSubmit(carToSubmit) {
    const newCarKey = v4();
    let updatedCarList = Object.assign({}, this.state.inventoryList, { [newCarKey]: carToSubmit });
    this.setState({ inventoryList: updatedCarList });
  }

  handleDeletingVehicle(carKey) {
    const { year, make, model } = this.state.inventoryList[carKey];
    if (confirm(`Are you sure you want to delete this ${year} ${make} ${model}?`)) {
      let updatedCarList = this.state.inventoryList;
      delete updatedCarList[carKey];
      this.setState({ selectedCar: null });
      base.remove(`inventoryList/${carKey}`);
    }
  }

  handleEditingVehicleState(event) {
    const key = event.target.name;
    const value = event.target.value;
    const updatedCar = Object.assign({}, this.state.inventoryList[this.state.selectedCar], { [key]: value });
    const updatedCarList = Object.assign({}, this.state.inventoryList, { [this.state.selectedCar]: updatedCar});
    this.setState({ inventoryList: updatedCarList });
  }

  handleSelectingCar(carKey) {
    this.setState({selectedCar: carKey});
  }

  render() {
    return(
      <div className="body-wrapper">
        <style jsx>{`
          .body-wrapper {
            display: flex;
            height: 100%;
          }`}</style>
        <CarsList inventoryList={this.state.inventoryList} onSelectingCar={this.handleSelectingCar} />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/newcar' render={() => <NewCar onNewVehicleSubmit={this.handleNewVehicleSubmit} />} />
          <Route path='/details' render={() => <CarDetails carToShow={this.state.inventoryList[this.state.selectedCar]} />} />
          <Route path='/editcar' render={() => <EditCar onEditingVehicleState={this.handleEditingVehicleState} carToEdit={this.state.inventoryList[this.state.selectedCar]} onDeletingVehicle={this.handleDeletingVehicle} carKey={this.state.selectedCar} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default Body;
