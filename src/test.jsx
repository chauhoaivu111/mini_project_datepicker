// import React, { useState, useRef, useEffect } from "react";
// import ButtonArrow from "./buttonArrow";

// const Years = ({ selectedYears, handleChangeYears }) => {
//   const currentYear = new Date().getFullYear();
//   const years = Array.from(
//     { length: 201 },
//     (_, index) => currentYear - 100 + index
//   );
//   const currentDate = new Date();
//   const today = currentDate.getFullYear();
//   const [isOpen, setIsOpen] = useState(false);
//   const popoverRef = useRef(null);
//   const setFocusScroll = useRef(null);
 
    // const handleClickOutside = (event) => {
    //   if (popoverRef.current && !popoverRef.current.contains(event.target)) {
    //     setIsOpen(!isOpen);
    //   }
    // };

    // document.addEventListener("mousedown", handleClickOutside);
   

    // console.log(isOpen)

//   const handleChangeYearSelection = (year) => {
//     handleChangeYears(year);
//     setIsOpen(false)
//   };

//   const handleOpen = () => {
//     setIsOpen(!isOpen)
//   }


//   useEffect(() => {
//     if (setFocusScroll.current) {
//       const container = setFocusScroll.current.parentElement;
//       const buttonIndex = years.indexOf(selectedYears);
//       const buttonHeight = setFocusScroll.current.clientHeight;
//       container.scrollTop = buttonIndex * buttonHeight * 0.36;
//     }
//   }, [isOpen, selectedYears, years]);

//   return (
//     <>
//       <div>
//         <h4 onClick={handleOpen}>{selectedYears}</h4>
//       </div>
//       <ButtonArrow
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
//       {isOpen && (
//         <ul className="main-popover" ref={popoverRef}>
//           {years.map((year) => (
//             <button
//               key={year}
//               value={year}
//               onClick={(e) => {
//                 e.stopPropagation()
//                 handleChangeYearSelection(year);
//               }}
//               className={`${year === today ? "buttonToday" : ""} ${
//                 selectedYears === year ? "buttonfocus" : ""
//               }`}
//               ref={selectedYears === year ? setFocusScroll : null}
//             >
//               {year}
//             </button>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default Years;




// const monthsInYear = 12;
// const totalMonths = selectedYears * monthsInYear + selectedMonth + increment;

// const newYear = Math.floor(totalMonths / monthsInYear);
// const newMonth = totalMonths % monthsInYear;

// handleChangeMonths(newMonth, newYear);




// import React from 'react';

// const DatePicker = ({ selectedDate, onSelectDate,today }) => {
//   const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//   const daysInMonth = [
//     31, isLeapYear(selectedDate.year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
//   ];

//   const days = Array.from({ length: daysInMonth[selectedDate.month] }, (_, index) => index + 1);

//   const handleDayClick = (day) => {
//     onSelectDate(day);
//   };

//   console.log("today",today)

//   console.log("date",selectedDate.day)

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Sun</th>
//           <th>Mon</th>
//           <th>Tue</th>
//           <th>Wed</th>
//           <th>Thu</th>
//           <th>Fri</th>
//           <th>Sat</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Array.from({ length: Math.ceil(days.length / 7) }, (_, rowIndex) => (
//           <tr key={rowIndex}>
//             {Array.from({ length: 7 }, (_, dayIndex) => {
//               const dayNumber = rowIndex * 7 + dayIndex + 1;
        
//               return dayNumber <= daysInMonth[selectedDate.month] ? (
//                 <td key={dayNumber}>
//                   <button
//                     onClick={() => handleDayClick(dayNumber)}
//                     className={dayNumber === +selectedDate.day && today === selectedDate.day ? 'selected' : ''}
//                   >
//                     {dayNumber}
//                   </button>
//                 </td>
//               ) : (
//                 <td key={dayIndex}></td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DatePicker;