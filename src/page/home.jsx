import React, { useState } from "react";
import DatePicker from "../components/datepicker/DatePicker";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>example 1 : {value}</h1>
      <DatePicker values={setValue} placeholder="Select Date" />

      <h1>example 2 : </h1>
      <DatePicker current={true} placeholder="select Date" />

      <h1>example 3 : </h1>
      <DatePicker />
    </div>
  );
};

export default Home;
