import React from "react";
import './Car.css'

class Car extends React.Component {

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('Car UNSAFE_componentWillReceiveProps', nextProps);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Car shouldComponentUpdate', nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Car componentWillUpdate', nextProps, nextState);
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Car getDerivedStateFromProps', nextProps, prevState);

    return prevState;
  }

  componentDidUpdate() {
    console.log('Car componentDidUpdate');
  }

  getSnapshotBeforeUpdate() {
    console.log('Car getSnapshotBeforeUpdate');
  }

  componentWillUnmount() {
    console.log('Car componentWillUnmount');
  }

  render() {
    console.log('Car render');

    if (Math.random() > 0.7) {
      throw new Error('Car random failed');
    }

    const inputClasses = ['input'];
   
    if (this.props.name !== '') {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }
  
    if (this.props.name.length > 4) {
      inputClasses.push('bold');
    }
  
    return (
    <div className="Car">
      <h3>Car name: {this.props.name}</h3>
      <p>Year: {this.props.year}</p>
      <input 
        className={inputClasses.join(' ')}
        type='text' 
        onChange={this.props.onChangeName} 
        value={this.props.name}/>
      <button onClick={this.props.onDelete}>Delete</button>
    </div>
  )} 
}

export default Car;