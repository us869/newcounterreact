import "./styles.css";
import React, { useState } from "react";

export default function App() {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const incrementClick = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const decrementClick = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  const resetClick = () => {
    // Counter state is decremented
    setCounter(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%"
      }}
    >
      Counter App
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh"
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            padding: "10px",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white"
          }}
          onClick={incrementClick}
        >
          Increment
        </button>

        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            padding: "10px",
            marginLeft: "5px",
            backgroundColor: "blue",
            borderRadius: "8%",
            color: "white"
          }}
          onClick={resetClick}
        >
          Reset
        </button>

        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            padding: "10px",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white"
          }}
          onClick={decrementClick}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
