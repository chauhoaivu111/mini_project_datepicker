import React from "react";

const Dates = ({ selectedDate, handleChangeDates, today }) => {
  const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  const daysInMonth = [
    31,
    isLeapYear(selectedDate.year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const listDays = Array.from(
    { length: daysInMonth[selectedDate.month] },
    (_, index) => index + 1
  );

  const orderOfDay = new Date(
    selectedDate.year,
    selectedDate.month,
    1
  ).getDay();

  const generateDayCells = (row) => {
    const dayCells = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const dayNumber = (row - 1) * 7 + dayIndex - orderOfDay + 1;
      const isDayValid =
        dayNumber >= 1 && dayNumber <= daysInMonth[selectedDate.month];

      dayCells.push(
        <td key={dayIndex}>
          {isDayValid && <button>{dayNumber}</button>}
        </td>
      );
    }

    return dayCells;
  };

  const weekRows = Array.from(
    { length: Math.ceil((listDays.length + orderOfDay) / 7) },
    (_, index) => index + 1
  );

  return (
    <div className="main-date">
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weekRows.map((row) => (
            <tr key={row}>{generateDayCells(row)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dates;
