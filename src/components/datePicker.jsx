import React, { useState } from 'react';
import YearPicker from '../components/years';
import MonthPicker from '../components/months';
import DatePicker from '../components/dates';

const Calendar = ({ onCombinedValueChange }) => {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedDate, setSelectedDate] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate()
  });

  
  const today =  currentDate.getDate()
  // console.log("today",today)

  const handleYearChange = year => {
    setSelectedYear(year);
    setSelectedDate(prevDate => ({ ...prevDate, year }));
  };

  const handleMonthChange = month => {
    setSelectedMonth(month);
    setSelectedDate(prevDate => ({ ...prevDate, month }));
  };

  const handleDateChange = day => {
    setSelectedDate(prevDate => ({ ...prevDate, day }));
  };

  const combinedValue = `${selectedDate.day}-${selectedMonth}-${selectedYear}`;

  onCombinedValueChange(combinedValue);

  console.log("check", selectedDate.day)



  return (
    <div>
      <h2>Calendar</h2>
      <YearPicker selectedYear={selectedYear} onSelectYear={handleYearChange} />
      <MonthPicker selectedMonth={selectedMonth} onSelectMonth={handleMonthChange} />
      <DatePicker selectedDate={selectedDate} onSelectDate={handleDateChange} today={today}

      />
    </div>
  );
};

export default Calendar;
