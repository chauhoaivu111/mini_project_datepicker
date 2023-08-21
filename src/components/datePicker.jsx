import React from 'react';
import Years from './years';
import Months from './months';
import Dates from './dates';

const datePicker = (onChange,value) => {
  return (
    <div>
        <Years/>
        <Months/>
        <Dates/>
        
    </div>
  )
}

export default datePicker