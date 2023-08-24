/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

const dates = ({ selectedDate, handleChangeDates, today }) => {
  // get current date
  const currentDate = new Date();

  const [current] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  });

  console.log(selectedDate.day)

  console.log("current", current);
  const handleChangeDate = (daymumber) => {
    handleChangeDates(daymumber);
  };

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
  console.log(selectedDate.month);
  console.log("maxdate flollow index month", daysInMonth[selectedDate.month]);
  // 1+ ...31
  const listDays = Array.from(
    { length: daysInMonth[selectedDate.month] },
    (_, index) => index + 1
  );

  const formatValue = `${
    parseInt(selectedDate.month) + 1
  }-${selectedDate.year}`;

  const currentToday = `${parseInt(current.month) + 1}-${
    current.year
  }`;
  console.log("currentoday",currentToday)
  console.log("formatvalue",formatValue);
  console.log("day", selectedDate.day);
  console.log("month", selectedDate.month);
  console.log("today", today);

  // console.log("listday", listDays);

  // console.log("passmonth",selectedDate.month);
  // console.log(daysInMonth);
  // console.log(selectedDate.year);
  // console.log(isLeapYear(selectedDate.year));

  const orderOfDay = new Date(
    selectedDate.year,
    selectedDate.month,
    1
  ).getDay();

  // console.log("firstdateflowWeek", orderOfDay);

  // check how many row in month
  const weekRows = Array.from(
    { length: Math.ceil((listDays.length + orderOfDay) / 7) },
    (_, index) => index + 1
  );
  console.log("row", weekRows);

  const gridDate = (row) => {
    const dayColumn = [];

    // (1-1)*7 + 0 - 3 + 1 = -2
    // (1-1)*7 + 1 - 3 + 1 = -1
    // (1-1)*7 + 2 - 3 + 1 =  0
    // .....................
    // (5-1)*7 + 6 - 3 + 1 = 32
    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const dayNumber = (row - 1) * 7 + dayIndex - orderOfDay + 1;
      // is not true not show
      const isValidDay =
        dayNumber >= 1 && dayNumber <= daysInMonth[selectedDate.month];

      // console.log("row",row)
      // console.log("daynumber",dayNumber)
      // console.log("orderday",orderOfDay)
      // console.log("dateindex",dayIndex)

      dayColumn.push(
        <td key={dayIndex}>
          {isValidDay === true ? (
            <button
              onClick={() => handleChangeDate(dayNumber)}
              className={
                `${selectedDate.day === dayNumber  
                  ? "button-date"
                  : ""} ${(currentToday === formatValue && current.day === dayNumber ) ? "button-focus-today" : ""} `
              }
            >
              {dayNumber}
            </button>
          ) : (
            ""
          )}
        </td>
      );
    }

    return dayColumn;
  };

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
            <tr key={row}>{gridDate(row)}</tr>
          ))}
        </tbody>

        <tbody></tbody>
      </table>
    </div>
  );
};

export default dates;
