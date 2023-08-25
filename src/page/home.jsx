import React, { useState } from "react";
import DatePicker from "../components/datePicker";

const Home = () => {
  const [value, setValue] = useState("");



  return (
    <div className="App">
      <DatePicker current={true}  values={setValue} />
      <h1>{value}</h1>
    </div>
  );
};

export default Home;
