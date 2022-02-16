import React from "react";
import Car from "./Car/Car";
import "./App.css";

function App() {
  const state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2021 },
      { name: "Mazda", year: 2010 },
    ],
  };

  const divStyle = {
    textAlign: "center",
  };

  return (
    <div style={divStyle}>
      <h1>Hello world!</h1>
      <Car name={"Ford"} year={2018} />
      <Car name={"Audi"} year={2021} />
      <Car name={"Mazda"} year={2010} />
    </div>
  );
}

export default App;
