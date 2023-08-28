
import React, { useState, useRef, useEffect } from "react";
import YearButton from "./YearButton"


const currentYear = new Date().getFullYear();
const today = new Date().getFullYear();
const Years = ({ selectedYears, handleChangeYears }) => {

  const years = Array.from({ length: 201 }, (_, index) => currentYear - 100 + index);

  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const selectedYearButtonRef = useRef(null);

  const handleChangeYearSelection = (year) => {
    handleChangeYears(year);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (selectedYearButtonRef.current) {
      const container = selectedYearButtonRef.current.parentElement;
      const buttonIndex = years.indexOf(selectedYears);
      const buttonHeight = selectedYearButtonRef.current.clientHeight;
      container.scrollTop = buttonIndex * buttonHeight * 0.36;
    }
  }, [selectedYears, years]);

  return (
    <>
      <div className="main-frame-year">
        <h4 onClick={handleOpen} className="frame-year">
          {selectedYears}
        </h4>
      </div>
      {isOpen && (
        <ul className="main-popover" ref={popoverRef}>
          {years.map((year) => (
            <YearButton
              key={year}
              year={year}
              today={today}
              isSelected={selectedYears === year}
              handleChangeYearSelection={handleChangeYearSelection}
              setFocusScrollRef={selectedYears === year ? selectedYearButtonRef : null}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Years;
