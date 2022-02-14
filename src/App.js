import React from "react";
import Car from "./Car/Car";
import "./App.css";

function App() {
  const divStyle = {
    textAlign: "center",
  };

  return (
    <div style={divStyle}>
      <h1>Hello world!</h1>
      <Car name={"Ford"} year={2018}>
        <p style={{ color: "blue" }}>BLUE</p>
      </Car>
      <Car name={"Audi"} year={2021}>
        <p style={{ color: "brown" }}>BROWN</p>
      </Car>
      <Car name={"Mazda"} year={2010}>
        <p style={{ color: "red" }}>RED</p>
      </Car>
    </div>
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hello world!")
  // );
}

export default App;
