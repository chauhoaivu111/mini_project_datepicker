import React from 'react';

const MonthPicker = ({ selectedMonth, onSelectMonth }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <select value={selectedMonth} onChange={e => onSelectMonth(e.target.value)}>
      {months.map((month, index) => (
        <option key={month} value={index}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default MonthPicker;
