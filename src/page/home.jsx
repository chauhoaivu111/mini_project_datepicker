import React, { useState } from "react";
import DatePicker from "../components/datePicker";

const Home = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  return (
    <div className="App">
      <DatePicker  values={setValue} placeholder = "select Date" />
      <h1>{value}</h1>
      
      <DatePicker current={true}  values={setValue1} placeholder = "select Date" />
      
    </div>
  );
};

export default Home;
