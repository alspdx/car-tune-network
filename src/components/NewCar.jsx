import React from 'react';

function NewCar() {
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

export default NewCar;
