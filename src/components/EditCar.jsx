
import PropTypes from 'prop-types';
import React from 'react';

function EditCar(props) {
  const { year, make, model, color, customerName, reasonForService } = props.carToEdit;

  console.log(`this is a ${year}, ${make}, ${model}, ${customerName}, ${reasonForService}`);
  return(
    <div className='edit-car'>
      <style jsx>{`
        .edit-car {
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
      <h1>Edit Car: {year} {make} {model}</h1>
      <form>
        <label>
          Year:
          <input type='text' value={year} onChange={props.onEditingVehicleState('year')} />
        </label>
        <label>
          Make:
          <input type='text' value={make} onChange={props.onEditingVehicleState('make')} />
        </label>
        <label>
          Model:
          <input type='text' value={model} onChange={props.onEditingVehicleState('model')} />
        </label>
        <label>
          Color:
          <input type='text' value={color} onChange={props.onEditingVehicleState('color')} />
        </label>
        <label>
          Customer:
          <input type='text' value={customerName} onChange={props.onEditingVehicleState('customerName')} />
        </label>
        <label>
          Reason(s) for service:
          <textarea type='text' value={reasonForService} onChange={props.onEditingVehicleState('reasonForService')} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

EditCar.propTypes = {
  carToEdit: PropTypes.object,
  carKey: PropTypes.string,
  onEditingVehicleState: PropTypes.func
};

export default EditCar;
