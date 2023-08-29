import React from "react";
import "./Years.scss"

const YearButton = ({
  year,
  today,
  isSelected,
  handleChangeYearSelection,
  setFocusScrollRef,
}) => (
  <button
    value={year}
    onClick={() => handleChangeYearSelection(year)}
    className={`${year === today ? "button-year-Today" : ""} ${isSelected ? "button-focus-year" : ""}`}
    ref={isSelected ? setFocusScrollRef : null}
  >
    {year}
  </button>
);

export default YearButton;
