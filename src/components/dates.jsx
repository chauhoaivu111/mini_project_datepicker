import React from 'react';

const DatePicker = ({ selectedDate, onSelectDate, today }) => {
  const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const daysInMonth = [
    31, isLeapYear(selectedDate.year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  const days = Array.from({ length: daysInMonth[selectedDate.month] }, (_, index) => index + 1);

  const handleDayClick = (day) => {
    onSelectDate(day);
  };

  const firstDayOfMonth = new Date(selectedDate.year, selectedDate.month, 1).getDay();

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
        {Array.from({ length: Math.ceil((days.length + firstDayOfMonth) / 7) }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 7 }, (_, dayIndex) => {
              const dayNumber = rowIndex * 7 + dayIndex - firstDayOfMonth + 1;
              const isDayValid = dayNumber >= 1 && dayNumber <= daysInMonth[selectedDate.month];
              const isEmptyCell = dayNumber < 1 || dayNumber > daysInMonth[selectedDate.month];

              return (
                <td key={dayIndex}>
                  {!isEmptyCell && (
                    <button
                      onClick={() => isDayValid && handleDayClick(dayNumber)}
                      className={
                        isDayValid &&
                        dayNumber === +selectedDate.day &&
                        today === selectedDate.day
                          ? 'selected'
                          : ''
                      }
                      disabled={!isDayValid}
                    >
                      {isDayValid ? dayNumber : ''}
                    </button>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DatePicker;
