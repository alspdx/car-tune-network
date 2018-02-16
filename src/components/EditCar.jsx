
import PropTypes from 'prop-types';
import React from 'react';

function EditCar(props) {
  const car = props;
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
      <h1>Edit Car: {car.year} {car.make} {car.model}</h1>
      <form>
        <label>
          Year:
          <input type='text' />
        </label>
        <label>
          Make:
          <input type='text' />
        </label>
        <label>
          Model:
          <input type='text' />
        </label>
        <label>
          Color:
          <input type='text' />
        </label>
        <label>
          Customer:
          <input type='text' />
        </label>
        <label>
          Reason(s) for service:
          <textarea type='text' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

EditCar.propTypes = {
  match: PropTypes.object
};

export default EditCar;
