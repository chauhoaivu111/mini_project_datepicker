


import React, { useState, useEffect, useRef } from "react";
import "./DatePicker.scss";
import calendar from "../../assets/calendar.png"
import Months from "../months/Months";
import Dates from "../dates/Dates";
import Years from "../years/Years";

const currentDate = new Date();

const DatePicker = ({  values = () => {}, current, placeholder }) => {
  const [selectedDate, setSelectedDate] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  });

  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [today, setToday] = useState(placeholder);
  const [lastDayOfMonth,setLastDayOfMonth] = useState()


  const handleChangeYears = (year) => {
    setSelectedDate((prevDate) => ({
      ...prevDate,
      year,
    }));
  };

  const handleChangeMonths = (month, year) => {
    setSelectedDate((prevDate) => ({
      ...prevDate,
    month: parseInt(month),
   
    }));
    if (month === 0 || month === 11) {
      setSelectedDate((prevDate) => ({
        ...prevDate,
        year,
      }));


    }


    const lastDay = new Date(year, parseInt(month) + 1, 0).getDate();
    setLastDayOfMonth(lastDay);
  };

  const handleChangeDates = (day) => {
    setSelectedDate((prevDate) => ({
      ...prevDate,
      day,
    }));
    setIsClicked(true);
  };

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



  useEffect(() => {
    const formattedValue = `${selectedDate.day >= lastDayOfMonth ? lastDayOfMonth : selectedDate.day }-${parseInt(selectedDate.month) + 1}-${selectedDate.year}`;

    if (current === undefined &&  isClicked === false ) {
      values("");
      setToday(placeholder);
    } 
    else if(current === true && isClicked === false) {
      values(`${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`)
      setToday(`${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`)
    }
    else {
      values(formattedValue);
      setToday(formattedValue);
    }
  }, [selectedDate, current, isClicked, values, placeholder,lastDayOfMonth]);



  return (
    <div>
      <div ref={popoverRef} className="main-input">
        <input placeholder={today} />
        <div className="img-button">
        <img src={calendar} alt="" onClick={handleOpen} />
        </div>
      
      </div>

      <div>
        {open && (
          <div className="main-datepicker" ref={popoverRef}>
            <Years selectedYears={selectedDate.year} handleChangeYears={handleChangeYears} />
            <Months
              selectedMonth={selectedDate.month}
              handleChangeMonths={handleChangeMonths}
              selectedYears={selectedDate.year}
           
            />
            <Dates selectedDate={selectedDate} handleChangeDates={handleChangeDates}
            lastDayOfMonth ={lastDayOfMonth}
            isClick={isClicked}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
