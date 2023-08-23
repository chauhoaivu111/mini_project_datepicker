/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from "react";
import Months from "./months";
import Dates from "./dates";
import Years from "./years";
const DatePicker = ({ onChange, value, combineValue, current }) => {
  // get current date
  const currentDate = new Date();

  const [selectedYear, setSelectedYears] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [today, setToday] = useState("");

  const handleChangeMonths = (month, year) => {
    setSelectedMonth(month);

    if (month === 0) {
      setSelectedYears(year);
    }
    if (month === 11) {
      setSelectedYears(year);
    }
  };

  const handleChangeYears = (year) => {
    setSelectedYears(year);
  };
  const formatValue = `${parseInt(selectedMonth) + 1}-${selectedYear}`;

  useEffect(() => {
    combineValue(formatValue);
    if (current === true) {
      setToday(formatValue);
    }
  }, [formatValue, combineValue, current]);

  console.log("type", typeof selectedMonth);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const popoverRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      <div ref={popoverRef}>
        <input placeholder={today ? today : "Select date"} />

        <button onClick={handleOpen}>open</button>
      </div>

      <div>
        {open && (
          <div className="main-datepicker" ref={popoverRef}>
            <Years
              selectedYears={selectedYear}
              handleChangeYears={handleChangeYears}
            />
            <Months
              selectedMonth={selectedMonth}
              handleChangeMonths={handleChangeMonths}
              selectedYears={selectedYear}
            />
            <Dates />
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
