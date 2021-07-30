import React, { useState } from "react";
import data from "./data";

function ProfileBox() {
  //   const [count, setCount] = useState(data);
  const [number, setNumber] = useState(0);

  function decrementCount() {
    if (number < 1) {
      alert("Nothing to see, press next");
    } else {
      setNumber(number - 1);
    }
  }

  function incrementCount() {
    setNumber(number + 1);
  }
  return (
    <div className="container">
      <div className="idDiv">
        {data[number].id}/{data.length}
      </div>
      <div className="nameDiv">
        {data[number].name.first} {data[number].name.last}
      </div>
      <div className="cityCountryDiv">
        {data[number].city}, {data[number].country}
      </div>
      <div className="titleDiv">Job Title: {data[number].title}</div>
      <div className="empDiv">Employer: {data[number].employer}</div>
      <div className="favMovieDiv">{data[number].favoriteMovies}</div>

      <div className="buttons">
        <button id="backButton" onClick={() => decrementCount()}>
          &#x2190; Back
        </button>
        <button id="nextButton" onClick={() => incrementCount()}>
          Next &#x2192;
        </button>
      </div>
    </div>
  ); //ToDo: need to make buttons not appear if id is 0, incrementButton if id is 25
}

export default ProfileBox;
