import React, { useState } from "react";
import DatePicker from "../components/datePicker";

const Home = () => {
  const [combinedValue, setCombinedValue] = useState("");

  console.log(combinedValue);

  return (
    <div className="App">
      <DatePicker current={true}  combineValue={setCombinedValue} />
    </div>
  );
};

export default Home;
