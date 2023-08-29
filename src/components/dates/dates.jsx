import React, { useState } from "react";
import "./Dates.scss";
import GridDate from "./GridDate";
import { getMaxDaysInMonthArray } from "./LeapYears";

const Dates = ({
  selectedDate,
  handleChangeDates,
  lastDayOfMonth,
  isClick,
}) => {
  const currentDate = new Date();
  const [current] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  });

  const handleChangeDate = (dayNumber) => {
    handleChangeDates(dayNumber);
  };

  const maxDaysInMonth = getMaxDaysInMonthArray(selectedDate.year);

  const listDays = Array.from(
    { length: maxDaysInMonth[selectedDate.month] },
    (_, index) => index + 1
  );

  const orderOfDay = new Date(
    selectedDate.year,
    selectedDate.month,
    1
  ).getDay();

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
            <tr key={row}>
              <GridDate
                row={row}
                selectedDate={selectedDate}
                handleChangeDate={handleChangeDate}
                current={current}
                isClick={isClick}
                lastDayOfMonth={lastDayOfMonth}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dates;
