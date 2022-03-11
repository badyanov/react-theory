import React from "react";
import classes from './Car.css'
import PropTypes from 'prop-types'
import withClass from "../hoc/withClass";

class Car extends React.Component {

   render() {
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
    <React.Fragment>
      <h3>Car name: {this.props.name}</h3>
      <p>Year: {this.props.year}</p>
      <input 
        className={inputClasses.join(' ')}
        type='text' 
        onChange={this.props.onChangeName} 
        value={this.props.name}/>
      <button onClick={this.props.onDelete}>Delete</button>
    </React.Fragment>
  )} 
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}


export default withClass(Car, classes.Car);