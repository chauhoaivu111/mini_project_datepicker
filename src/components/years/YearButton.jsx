import React from "react";

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
    className={`${year === today ? "buttonToday" : ""} ${isSelected ? "buttonfocus" : ""}`}
    ref={isSelected ? setFocusScrollRef : null}
  >
    {year}
  </button>
);

export default YearButton;
