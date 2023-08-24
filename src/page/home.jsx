import React, { useState } from "react";
import DatePicker from "../components/datePicker";

const Home = () => {
  const [value, setValue] = useState("");

  // console.log(value);

  return (
    <div className="App">
      <DatePicker current={true}  values={setValue} />
    </div>
  );
};

export default Home;
