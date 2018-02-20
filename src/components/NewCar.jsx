import PropTypes from 'prop-types';
import React from 'react';

function NewCar(props) {
  let year = '';
  let make = '';
  let model = '';
  let color = '';
  let customerName = '';
  let reasonForService = '';

  function handleNewVehicleFormSubmit(e) {
    e.preventDefault();
    props.onNewVehicleSubmit({
      year: year.value,
      make: make.value,
      model: model.value,
      color: color.value,
      customerName: customerName.value,
      reasonForService: reasonForService.value
    });
    year.value = '';
    make.value = '';
    model.value = '';
    color.value = '';
    customerName.value = '';
    reasonForService.value = '';
  }

  return(
    <div className='new-car'>
      <style jsx>{`
        .new-car {
          padding: var(--std-padding);
          width: 100%;
        }
        form {
          display: flex;
          flex-direction: column;
          width: 50%;
        }
        label {
          display: flex;
          flex-direction: column;
          padding-bottom: 20px;
        }`}</style>
      <h3>New car entry form:</h3>
      <form onSubmit={handleNewVehicleFormSubmit}>
        <label>
          Year:
          <input type='text' name='year' required ref={(input) => {year = input;}} />
        </label>
        <label>
          Make:
          <input type='text' name='make' required ref={(input) => {make = input;}} />
        </label>
        <label>
          Model:
          <input type='text' name='model' required ref={(input) => {model = input;}} />
        </label>
        <label>
          Color:
          <input type='text' name='color' required ref={(input) => {color = input;}} />
        </label>
        <label>
          Customer:
          <input type='text' name='customerName' required ref={(input) => {customerName = input;}} />
        </label>
        <label>
          Reason(s) for service:
          <textarea type='text' name='reasonForService' ref={(input) => {reasonForService = input;}} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

NewCar.propTypes = {
  onNewVehicleSubmit: PropTypes.func
};

export default NewCar;
