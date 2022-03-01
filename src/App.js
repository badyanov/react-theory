import React, { Component } from "react";
import Car from "./Car/Car";
import "./App.css";

class App extends React.Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2021 },
      { name: "Mazda", year: 2011 },
    ],

    pageTitle: 'React components'
  };

  changeTitleHandler = () => {
    const oldTitle = this.state.pageTitle;
    const newTitle = oldTitle + ' (changed)';
    this.setState({
        pageTitle: newTitle
      })
  }

  render() {
    console.log('render');

    const divStyle = {
      textAlign: "center",
    };

    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.changeTitleHandler}>Change title</button>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    )
  }
}

export default App;
