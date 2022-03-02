import React from "react";
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

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;

    this.setState({
      cars: cars
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

  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({cars})
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
          onDelete={this.deleteHandler.bind(this, index)}
          onChangeName={(event) => this.onChangeName(event.target.value, index)}
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
