import React, { useState } from 'react';
import Calendar from '../components/datePicker'; // Make sure to provide the correct path to your Calendar component

const ParentComponent = () => {
  const [combinedValue, setCombinedValue] = useState('');

  const handleCombinedValueChange = (value) => {
    setCombinedValue(value);
  };

  const [combinedValue2, setCombinedValue2] = useState('');

  const handleCombinedValueChange2 = (value) => {
    setCombinedValue2(value);
  };

  return (
    <div>
  
      <Calendar onCombinedValueChange={handleCombinedValueChange} />
      <p>Combined Value: {combinedValue}</p>

      {/* <Calendar onCombinedValueChange={handleCombinedValueChange2} />
      <p>Combined Value: {combinedValue2}</p> */}
    </div>
  );
};

export default ParentComponent;
