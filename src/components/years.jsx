import React, { useState, useRef, useEffect } from "react";
// import ButtonArrow from "./buttonArrow";

const Years = ({ selectedYears, handleChangeYears }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: 201 },
    (_, index) => currentYear - 100 + index
  );
  const currentDate = new Date();
  const today = currentDate.getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const setFocusScroll = useRef(null);
 
  const handleChangeYearSelection = (year) => {
    handleChangeYears(year);
    setIsOpen(false)
  };

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (setFocusScroll.current) {
      const container = setFocusScroll.current.parentElement;
      const buttonIndex = years.indexOf(selectedYears);
      const buttonHeight = setFocusScroll.current.clientHeight;
      container.scrollTop = buttonIndex * buttonHeight * 0.36;
    }
  }, [isOpen, selectedYears, years]);

  
  return (
    <>
      <div className="main-frame-year">
        <h4 onClick={handleOpen} className="frame-year">{selectedYears}</h4>
      </div>
     
      {isOpen && (
        <ul className="main-popover" ref={popoverRef}>
          {years.map((year) => (
            <button
              key={year}
              value={year}
              onClick={() => {
                handleChangeYearSelection(year);
              }}
              className={`${year === today ? "buttonToday" : ""} ${
                selectedYears === year ? "buttonfocus" : ""
              }`}
              ref={selectedYears === year ? setFocusScroll : null}
            >
              {year}
            </button>
          ))}
        </ul>
      )}
    </>
  );
};

export default Years;



//  <ButtonArrow
//         value={years}
//         getValue={selectedYears}
//         handle={handleChangeYearSelection}
//         direction="previous"
//       />
//       <ButtonArrow
//         value={years}
//         getValue={selectedYears}
//         handle={handleChangeYearSelection}
//         direction="next"
//       /> 