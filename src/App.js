import React from "react";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";
import "./App.css";

export const ClickedContext = React.createContext(false);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2021 },
        { name: "Mazda", year: 2011 },
      ],
      pageTitle: "*",
      showCars: false,
    };
  }

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;

    this.setState({
      cars: cars,
    });
  }

  toggleCarsHandler = () => {
    let pageTitle = this.state.pageTitle;
    if (this.state.showCars) {
      pageTitle = "*";
    }

    this.setState({
      showCars: !this.state.showCars,
      pageTitle: pageTitle,
    });
  };

  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({ cars });
  }

  render() {
    const divStyle = {
      textAlign: "center",
    };

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              index={index}
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={(event) =>
                this.onChangeName(event.target.value, index)
              }
            />
          </ErrorBoundary>
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <br />

        <button style={{ marginTop: "20px" }} onClick={this.toggleCarsHandler}>
          Show cars
        </button>

        <button onClick={() => this.setState({ clicked: true })}>
          Change clicked
        </button>

        <div
          style={{
            width: 400,
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
