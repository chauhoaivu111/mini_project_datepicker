import React from 'react';

const YearPicker = ({ selectedYear, onSelectYear }) => {
  // Generate a list of years from 1970 to 2120
  const years = Array.from({ length: 150 }, (_, index) => 1970 + index);

  return (
    <select value={selectedYear} onChange={e => onSelectYear(e.target.value)}>
      {years.map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearPicker;