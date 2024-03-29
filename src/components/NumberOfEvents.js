// src/components/NumberOfEvents.js

import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(value);
    let errorText;
    if (isNaN(value)) {
      errorText = 'Please enter a valid number.';
    } else if (value <= 0) {
      errorText = 'The number must be greater than 0.';
    } else {
      errorText = '';
    }
    setErrorAlert(errorText);
  };

  return (
    <div id='number-of-events'>
      <label htmlFor='number-of-events-input'>Number of Events: </label>
      <input
        type='text'
        id='number-of-events-input'
        className='number-of-events-input'
        value={number}
        onChange={handleInputChanged}
        placeholder='Enter a number'
      />
    </div>
  );
};

export default NumberOfEvents;
