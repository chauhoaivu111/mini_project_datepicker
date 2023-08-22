import React, { useState, useRef, useEffect } from "react";
import ButtonArrow from "./buttonArrow";

const Years = ({ selectedYears, handleChangeYears }) => {
  const currentYear = new Date().getFullYear();

  // console.log(currentYear)
  const years = Array.from(
    { length: 201 },
    (_, index) => currentYear - 100 + index
  );
  // 2023-100+0
  // console.log(years);

  const currentDate = new Date();
  const today = currentDate.getFullYear();
  const [isOpen, setIsOpen] = useState(false);

  const setFocusScroll = useRef(null);
  const togglePopover = () => {
    setIsOpen(true);
  };

  const handleChangeYearSelection = (year) => {
    handleChangeYears(year);
  
  };

  

  useEffect(() => {
    console.log(setFocusScroll.current);
    if (setFocusScroll.current) {
      const container = setFocusScroll.current.parentElement;
      const buttonIndex = years.indexOf(selectedYears);
      const buttonHeight = setFocusScroll.current.clientHeight;
      container.scrollTop = buttonIndex * buttonHeight * 0.36;

      // console.log(container.scrollTop);
      // console.log("buttonheight", buttonHeight);
      // console.log("buttonindex", buttonIndex);
      // console.log(container);


console.log(!isOpen)
      const closePopoverOnClickOutside = (event) => {
        if (!isOpen && !setFocusScroll.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("click", closePopoverOnClickOutside);
  
      return () => {
        document.removeEventListener("click", closePopoverOnClickOutside);
      };
    }
  }, [isOpen, selectedYears, years]);

  console.log(selectedYears);


  
  return (
    <>
      <div  onClick={togglePopover}>
        <h4>{selectedYears}</h4>
      </div>
      <ButtonArrow
        value={years}
        getValue={selectedYears}
        handle={handleChangeYearSelection}
        direction="previous"
      />
      <ButtonArrow
        value={years}
        getValue={selectedYears}
        handle={handleChangeYearSelection}
        direction="next"
      />

      {isOpen && (
        <ul className="main-popover"  >
          {years.map((year) => (
            <button
              key={year}
              value={year}
              onClick={() => handleChangeYearSelection(year)}
              className={`${year === today ? "buttonToday" : ""} + ${
                selectedYears === year ? "buttonfocus" : ""
              } `}
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
