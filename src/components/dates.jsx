import React from 'react';

const DatePicker = ({ selectedDate, onSelectDate,today }) => {
  const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const daysInMonth = [
    31, isLeapYear(selectedDate.year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  const days = Array.from({ length: daysInMonth[selectedDate.month] }, (_, index) => index + 1);

  const handleDayClick = (day) => {
    onSelectDate(day);
  };

  console.log("today",today)

  console.log("date",selectedDate.day)

  return (
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
        {Array.from({ length: Math.ceil(days.length / 7) }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 7 }, (_, dayIndex) => {
              const dayNumber = rowIndex * 7 + dayIndex + 1;
        
              return dayNumber <= daysInMonth[selectedDate.month] ? (
                <td key={dayNumber}>
                  <button
                    onClick={() => handleDayClick(dayNumber)}
                    className={dayNumber === +selectedDate.day && today === selectedDate.day ? 'selected' : ''}
                  >
                    {dayNumber}
                  </button>
                </td>
              ) : (
                <td key={dayIndex}></td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DatePicker;
