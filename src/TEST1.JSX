import React from "react";

const dates = ({ selectedDate, handleChangeDates, today }) => {
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

  console.log("listday", listDays);

  console.log("passmonth",selectedDate.month);
  console.log(daysInMonth);
  console.log(selectedDate.year);
  console.log(isLeapYear(selectedDate.year));

  const orderOfDay = new Date(
    selectedDate.year,
    selectedDate.month,
    1
  ).getDay();

  console.log("firstdateflowWeek", orderOfDay);

  const weekRows = Array.from(
    { length: Math.ceil((listDays.length + orderOfDay) / 7) },
    (_, index) => index + 1
  );
  console.log("row", weekRows);

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
            <tr key={row}>
              <td>dsfsfs</td>
            </tr>
          ))}
        </tbody>

        <tbody></tbody>
      </table>
    </div>
  );
};

export default dates;
