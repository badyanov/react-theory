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
    pageTitle: '*',
    showCars: false
  };

  changeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle
    })
  }

  toggleCarsHandler = () => {
    let pageTitle = this.state.pageTitle;
    if (this.state.showCars) {
      pageTitle = '*';
    }

    this.setState({
        showCars: !this.state.showCars,
        pageTitle: pageTitle
      })
  }

  render() {
    const divStyle = {
      textAlign: "center",
    };

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (<Car 
          key={index}
          name={car.name} 
          year={car.year} 
          onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
          // onChangeTitle={() => this.changeTitleHandler(car.name)}
        />)
      })
    }

    return (
      <div style={divStyle}>
        <h1>React components</h1>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={this.toggleCarsHandler}>Show cars</button>
        
        { cars }
      </div>
    )
  }
}

export default App;
