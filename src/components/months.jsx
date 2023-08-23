import React,{useState} from "react";

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
    const totalMonths = (selectedYears * monthsInYear) + parseInt(selectedMonth) + parseInt(monthChange);
    console.log(selectedYears)
    console.log(typeof(selectedMonth))
      console.log("total month",totalMonths)
    const newMonth = totalMonths % monthsInYear;
    console.log("newmonth",newMonth)
    const newYear = Math.floor(totalMonths / monthsInYear);
    handleChangeMonths(newMonth, newYear);
    console.log("newMonth", newMonth);
  };

  const handleNextMonth = () => {
    handleChangeMonth(1);
  };

  const previous = () => {
    handleChangeMonth(-1);
  };

  console.log("selected", selectedMonth);


  const handleChange  = (e) => {
    const value = e.target.value 
    handleChangeMonths(value)
  }


  return (
    <div className="main-framemonths">
      <button onClick={previous} className="button-icon-prev">
      ➤
      </button>
      <div className="frame-month-year-head">
      

        <select
          value={selectedMonth}
          onChange={handleChange}
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
