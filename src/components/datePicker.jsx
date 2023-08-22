/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Years from './years';
import Months from './months';
import Dates from './dates';
import years from './years';

const datePicker = (onChange,value) => {

  // get current date
  const currentDate = new Date()
  const [selectedYear,setSelectedYears] = useState(currentDate.getFullYear());

  // console.log(selectedYear)
  const handleChangeYears = (year) => {
    setSelectedYears(year)
  }


  return (
    <div>
        <Years selectedYears={selectedYear} handleChangeYears={handleChangeYears}/>
        {/* {selectedYear} */}
        <Months/>
        <Dates/>
        
    </div>
  )
}

export default datePicker