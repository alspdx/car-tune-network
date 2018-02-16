import CarDetails from './CarDetails';
import CarsList from './CarsList';
import EditCar from './EditCar';
import Error404 from './Error404';
import NewCar from './NewCar';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';


class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCar: null,
      inventoryList: {
        '171ca7fc-66c2-484b-8f26-5da7d36c2199': {
          year: '1977',
          make: 'Volkswagen',
          model: 'Rabbit',
          color: 'White',
          customerName: 'Joe Blow',
          reasonForService: 'Customer complains of a clunking noise coming from the front driver wheel. Check ball-joint and tie-rod for play, r&r as necessary.',
          serviceNotes: []
        },
        '5447aaa0-5d29-4303-bdd2-f793c5bee18b': {
          year: '1995',
          make: 'Volkswagen',
          model: 'Jetta GLX',
          color: 'Red',
          customerName: 'John Doe',
          reasonForService: 'Car is due for 80k service. Parts on order for timing chain, clutch, rear-main seal, transaxle seal, clutch, pressure plate, throw-out bearing and pushrod, spark plugs, spark plug wires, fuel filter, oil filter, air filter, cabin air filter.',
          serviceNotes: []
        },
        '3d92905a-62c3-4376-834e-c6b75032deba': {
          year: '2015',
          make: 'Volkswagen',
          model: 'Tiguan',
          color: 'Silver',
          customerName: 'Firstname Lastname',
          reasonForService: 'Oil change, full synthetic 5w-40.',
          serviceNotes: []
        },
        '566db0bd-2bd0-4892-a842-846ccef81cde': {
          year: '1980',
          make: 'Audi',
          model: 'Quattro',
          color: 'Black',
          customerName: 'Your Mother',
          reasonForService: 'Scheduled pre-purchase inspection, customer or current owner will drop car and keys off by 10:30am.',
          serviceNotes: []
        },
        '8dcae779-7d0d-4a76-ad20-fad06dc6d59a': {
          year: '1987',
          make: 'Volkswagen',
          model: 'Vanagon',
          color: 'Dark Gray',
          customerName: 'Beep Boop',
          reasonForService: 'Does not pass DEQ, may need full tune-up.',
          serviceNotes: []
        }
      }
    };
    this.handleSelectingCar = this.handleSelectingCar.bind(this);
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
          <Route path='/newcar' component={NewCar} />
          <Route path='/details' render={() => <CarDetails carToShow={this.state.inventoryList[this.state.selectedCar]} />} />
          <Route path='/editcar/:id' component={EditCar} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default Body;
