import React from "react";

const buttonArrow = ({ value, getValue, handle, direction }) => {
  const currentIndex = value.indexOf(getValue);

  const handleClick = () => {
    if ((direction === "next") & (currentIndex < value.length - 1)) {
      handle(value[currentIndex + 1]);
    } else if (direction === "previous" && currentIndex > 0) {
      handle(value[currentIndex - 1]);
    }
  };

  return (
    <button onClick={handleClick}>
      {direction === "next" ? <div>next</div> : <div>previous</div>}
    </button>
  );
};

export default buttonArrow;
