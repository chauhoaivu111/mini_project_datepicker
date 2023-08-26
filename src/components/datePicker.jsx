/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from "react";
import Months from "./months";
import Dates from "./dates";
import Years from "./years";
const DatePicker = ({ values, current }) => {
  // get current date
  const currentDate = new Date();
  const [selectedYear, setSelectedYears] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [today, setToday] = useState("");


  const [selectedDate, setSelectedDate] = useState({
    year: selectedYear,
    month: selectedMonth,
    day: currentDate.getDate()

  })

  useEffect(() => {
    setSelectedDate((prevDate) => ({
      ...prevDate,
      year: selectedYear,
      month: selectedMonth,
    }));
  }, [selectedYear, selectedMonth]);




  const handleChangeYears = (year) => {
    setSelectedYears(year);

  };


  // console.log("previous",previousSelectedMonth)

  const handleChangeMonths = (month, year) => {




    setSelectedMonth(month);
    setSelectedDate((prev) => ({ ...prev, month }));


    if (month === 0) {
      setSelectedYears(year);

    }
    if (month === 11) {
      setSelectedYears(year);

    }
  };

  const handleChangeDates = (day) => {
    setSelectedDate(prev => ({ ...prev, day }));

  }

  //  console.log("testday",selectedDate.day)

  // console.log(abc)

  const [isClicked, setIsClicked] = useState()


  // console.log("isClicked",isClicked)


  const [isSelectedMonth, setIsSelectedMonth] = useState()
  const [isSelectedYear, setIsSelectedYear] = useState()

  const [updateMonth, setUpdateMonth] = useState()
  const [updateYear, setUpdateYear] = useState()



  useEffect(() => {
    if (isClicked === undefined) {
      setUpdateMonth(currentDate.getMonth() + 1);
      setUpdateYear(currentDate.getFullYear());
    } else {
      setUpdateMonth(parseInt(selectedMonth) + 1);
      setUpdateYear(selectedYear)
    }
  }, [isSelectedMonth, isSelectedYear, (selectedMonth), selectedYear]);


  




  const formatValue = `${selectedDate.day}-${parseInt(updateMonth)}-${updateYear}`;




  useEffect(() => {
    values(formatValue);
    if (current === true) {
      setToday(formatValue);
    }
  }, [formatValue, values, current]);

  // console.log("type", typeof selectedMonth);

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
            <Dates selectedDate={selectedDate} handleChangeDates={handleChangeDates} isSelectedMonth={setIsSelectedMonth} isSelectedYear={setIsSelectedYear} isClicked={setIsClicked} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
