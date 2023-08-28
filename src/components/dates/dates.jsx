import React, { useState } from "react";
import GridDate from "./GridDate";
import { getMaxDaysInMonthArray } from "./utils";

const Dates = ({ selectedDate, handleChangeDates, lastDayOfMonth, isClick }) => {
  const currentDate = new Date();

  const [current] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  });

  

  const handleChangeDate = (dayNumber) => {
    handleChangeDates(dayNumber);
  
  };

  const maxDaysInMonth = getMaxDaysInMonthArray(selectedDate.year);

  const listDays = Array.from(
    { length: maxDaysInMonth[selectedDate.month] },
    (_, index) => index + 1
  );

  const orderOfDay = new Date(
    selectedDate.year,
    selectedDate.month,
    1
  ).getDay();

  const weekRows = Array.from(
    { length: Math.ceil((listDays.length + orderOfDay) / 7) },
    (_, index) => index + 1
  );

  
  return (
    <div className="main-date">
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weekRows.map((row) => (
            <tr key={row}>
              <GridDate
                row={row}
                selectedDate={selectedDate}
                handleChangeDate={handleChangeDate}
                current={current}
                isClick={isClick}
                lastDayOfMonth={lastDayOfMonth}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dates;




// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { useCallback, useEffect, useState} from "react";

// const dates = ({ selectedDate, handleChangeDates, lastDayOfMonth, isclicked }) => {
//   // get current date
//   const currentDate = new Date();

//   const [current] = useState({
//     year: currentDate.getFullYear(),
//     month: currentDate.getMonth(),
//     day: currentDate.getDate(),
//   });

//   const [click ,setClick] = useState()
//   // console.log(click)




// console.log(isclicked)
  
//   const handleChangeDate = (daymumber) => {
    
//   handleChangeDates(daymumber);

//   setClick(daymumber)
  

//   };



//   const isLeapYear = (year) => {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   const MaxDaysInMonth = [
//     31,
//     isLeapYear(selectedDate.year) ? 29 : 28,
//     31,
//     30,
//     31,
//     30,
//     31,
//     31,
//     30,
//     31,
//     30,
//     31,
//   ];



//   // 1+ ...31
//   const listDays = Array.from(
//     { length: MaxDaysInMonth[selectedDate.month] },
//     (_, index) => index + 1
//   );

//   const orderOfDay = new Date(
//     selectedDate.year,
//     selectedDate.month,
//     1
//   ).getDay();

//   // check how many row in month
//   const weekRows = Array.from(
//     { length: Math.ceil((listDays.length + orderOfDay) / 7) },
//     (_, index) => index + 1
//   );




//   const gridDate = (row) => {
//     const dayColumn = [];

//     // (1-1)*7 + 0 - 3 + 1 = -2
//     // (1-1)*7 + 1 - 3 + 1 = -1
//     // (1-1)*7 + 2 - 3 + 1 =  0
//     // .....................
//     // (5-1)*7 + 6 - 3 + 1 = 32
  
//     for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
//       const dayNumber = (row - 1) * 7 + dayIndex - orderOfDay + 1;

//       const isValidDay =
//         dayNumber >= 1 && dayNumber <= MaxDaysInMonth[selectedDate.month];

      

//       dayColumn.push(
//         <td key={dayIndex}>
//           {isValidDay === true ? (
//             <button
//               onClick={() => handleChangeDate(dayNumber)}
//               className={` 
              
//                 ${
                  

//                   current.day === dayNumber 
//                     ? current.month === selectedDate.month &&
//                       current.year === selectedDate.year
//                       ? "button-focus-today"
//                       : ""
//                     : ""
//                 }
//                 ${
//                   (selectedDate.day === dayNumber && isclicked === true   ) || (selectedDate.day >= lastDayOfMonth && lastDayOfMonth === dayNumber)
//                     ? "button-date"
//                     : ""
//                 }
                
//                 `}
//             >
//               {dayNumber}
//             </button>
//           ) : (
//             ""
//           )}
//         </td>
//       );
//     }

//     return dayColumn;
//   };


//   return (
//     <div className="main-date">
//       <table>
//         <thead>
//           <tr>
//             <th>Sun</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//           </tr>
//         </thead>
//         <tbody>
//           {weekRows.map((row) => (
//             <tr key={row}>{gridDate(row)}</tr>
//           ))}
//         </tbody>

//         <tbody></tbody>
//       </table>
//     </div>
//   );
// };

// export default dates;
