import React from "react";
import { getMaxDaysInMonthArray } from "./LeapYears";

const GridDate = ({
  row,
  selectedDate,
  handleChangeDate,
  current,
  isClick,
  lastDayOfMonth,
}) => {
  const orderOfDay = new Date(
    selectedDate.year,
    selectedDate.month,
    1
  ).getDay();

  const maxDaysInMonth = getMaxDaysInMonthArray(selectedDate.year);

  const gridDate = () => {
    const dayColumn = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const dayNumber = (row - 1) * 7 + dayIndex - orderOfDay + 1;

      const isValidDay =
        dayNumber >= 1 && dayNumber <= maxDaysInMonth[selectedDate.month];

      dayColumn.push(
        <td key={dayIndex}>
          {isValidDay === true ? (
            <button
              onClick={() => handleChangeDate(dayNumber)}
              className={` 
              
                ${
                  current.day === dayNumber
                    ? current.month === selectedDate.month &&
                      current.year === selectedDate.year
                      ? "button-focus-today"
                      : ""
                    : ""
                }
                ${
                  selectedDate.day === dayNumber && isClick === true
                    ? "button-date"
                    : ""
                }
                ${
                  selectedDate.day > lastDayOfMonth &&
                  isClick === true &&
                  lastDayOfMonth === dayNumber
                    ? "button-date"
                    : ""
                }
                ${"default-buton"}
                
                `}
            >
              {dayNumber}
            </button>
          ) : (
            ""
          )}
        </td>
      );
    }

    return dayColumn;
  };

  return <>{gridDate()}</>;
};

export default GridDate;
