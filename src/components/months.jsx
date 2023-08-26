import React from "react";

const Month = ({selectedMonth, selectedYears, handleChangeMonths }) => {
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


  // console.log(selectedMonth)
 
  const handleChangeMonth = (monthChange) => {
    const monthsInYear = 12;
    const totalMonths = selectedYears * monthsInYear + parseInt(selectedMonth) + parseInt(monthChange);
    const newMonth = totalMonths % monthsInYear;
    const newYear = Math.floor(totalMonths / monthsInYear);
    handleChangeMonths(newMonth, newYear);

    // console.log("selectedMonth",selectedMonth)
    // console.log("newmonht",newMonth)
    

    // console.log(typeof(newMonth))


  };

  


  const handleNextMonth = () => {
    handleChangeMonth(1);
  };

  const previous = () => {
    handleChangeMonth(-1);
  };


  const handleChange = (e) => {
    const value = e.target.value;
    handleChangeMonths(parseInt(value));
    // console.log((value))
  };

  

  return (
    <div className="main-framemonths">
      <button onClick={previous} className="button-icon-prev">
        ➤
      </button>
      <div className="frame-month-year-head">
        <select value={parseInt(selectedMonth)} onChange={handleChange}>
          {months.map((month, index) => (
            <option key={month} value={(index)}>
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
