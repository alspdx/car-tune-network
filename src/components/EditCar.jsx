import PropTypes from 'prop-types';
import React from 'react';

function EditCar(props) {

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
      {props.carToEdit ? (
        <div>
          <h1>Edit Car: {props.carToEdit.year} {props.carToEdit.make} {props.carToEdit.model}</h1>
          <label>
            Year:
            <input type='number' name='year' min='1885' max='2019' value={props.carToEdit.year} onChange={props.onEditingVehicleState} />
          </label>
          <label>
            Make:
            <input type='text' name='make' value={props.carToEdit.make} onChange={props.onEditingVehicleState} />
          </label>
          <label>
            Model:
            <input type='text' name='model' value={props.carToEdit.model} onChange={props.onEditingVehicleState} />
          </label>
          <label>
            Color:
            <input type='text' name='color' value={props.carToEdit.color} onChange={props.onEditingVehicleState} />
          </label>
          <label>
            Customer:
            <input type='text' name='customerName' value={props.carToEdit.customerName} onChange={props.onEditingVehicleState} />
          </label>
          <label>
            Reason(s) for service:
            <textarea type='text' name='reasonForService' value={props.carToEdit.reasonForService} onChange={props.onEditingVehicleState} />
          </label>
          <button type='submit'>Submit</button>
          <button onClick={() => props.onDeletingVehicle(props.carKey)}>Delete this vehicle</button>
        </div>
      ) : (
        <h1>There is no car selected. Please select a car from the list or go away.</h1>
      )}

    </div>
  );
}

EditCar.propTypes = {
  carToEdit: PropTypes.object,
  carKey: PropTypes.string,
  onEditingVehicleState: PropTypes.func,
  onDeletingVehicle: PropTypes.func
};

export default EditCar;
