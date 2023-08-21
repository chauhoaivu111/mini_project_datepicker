import React, { useState } from "react";
import DatePicker from "../components/datePicker";

const Home = () => {

    const [valuePicker1,setValuePicker1] = useState("")
    const [valuePicker2,setValuePicker2] = useState("")


    const handleChange1 = (e) => {
        const value = e.target.value
        setValuePicker1(value)
    }

    
    const handleChange2 = (e) => {
        const value = e.target.value
        setValuePicker2(value)
    }

  return (
    <div>
      <div>
        <h1>date picker have value default</h1>
        <DatePicker current={true} onChange ={handleChange1} />
        <p>date:{valuePicker1}</p>
      </div>

      <div>
        <h1>date pciker not have value default</h1>
        <DatePicker onChange = {handleChange2} />
        <p>date:{valuePicker2}</p>
      </div>
    </div>
  );
};

export default Home;
