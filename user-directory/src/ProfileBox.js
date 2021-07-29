import React, { useState } from "react";
import data from "./data";

function ProfileBox() {
  //   const [count, setCount] = useState(data);
  const [number, setNumber] = useState(0);

  function decrementCount() {
    setNumber(number - 1);
  }

  function incrementCount() {
    setNumber(number + 1);
  }
  return (
    <div>
      <h1>{JSON.stringify(data[number])}</h1>
      <button onClick={() => decrementCount()}>Back</button>
      <button onClick={() => incrementCount()}>Next</button>
    </div>
  ); //ToDo: need to make buttons not appear if id is 0, incrementButton if id is 25
}

export default ProfileBox;
