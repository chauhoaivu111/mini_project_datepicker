import React, { useState } from "react";
import Years from "./years";

const Month = ({ selectedMonth, selectedYears, handleChangeMonths }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleChangeMonth = (monthChange) => {
    const monthsInYear = 12;
    const totalMonths =
      selectedYears * monthsInYear + selectedMonth + monthChange;
    const newMonth = totalMonths % monthsInYear;
    const newYear = Math.floor(totalMonths / monthsInYear);
    handleChangeMonths(newMonth, newYear);
  };

  const handleNextMonth = () => {
    handleChangeMonth(1);
  };

  const previous = () => {
    handleChangeMonth(-1);
  };

  console.log("selected", selectedMonth);

  return (
    <div className="main-framemonths">
      <button onClick={previous} className="button-icon-prev">
      ➤
      </button>
      <div className="frame-month-year-head">
      

        <select
          value={selectedMonth}
          onChange={(e) => handleChangeMonths(e.target.value, selectedYears)}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleNextMonth} className="button-icon-next">
        ➤
      </button>
    </div>
  );
};

export default Month;
