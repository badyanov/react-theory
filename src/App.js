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

  changeTitleHandler = (newTitle) => {
    this.setState({
        pageTitle: newTitle
      })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    const divStyle = {
      textAlign: "center",
    };

    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

        {
          cars.map((car, index) => {
            return (<Car 
              key={index}
              name={car.name} 
              year={car.year} 
              //onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />)
          })
        }

      </div>
    )
  }
}

export default App;
