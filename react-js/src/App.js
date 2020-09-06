import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [{ name: "ford" }, { name: "audi" }],
    pageTitle: "Hello react",
    showCars: false,
  };

  toggleCarsHandler = (newTitle) => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars,
    });
  }

  render() {
    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            onChangeName={(event) => {
              this.onChangeName(event.target.value, index);
            }}
          />
        );
      });
    }

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler.bind(this, "Click")}>
          Label
        </button>
        <div>{cars}</div>
      </div>
    );
  }
}

export default App;
