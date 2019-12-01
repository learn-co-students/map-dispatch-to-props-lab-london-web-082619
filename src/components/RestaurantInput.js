import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    // addRestaurant is a props comes from mapDispatchToProps, its takes an argument to change the restauran state
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapStateToProps = (state) =>{
  return { restaurants: state.restaurants}
}

const mapDispatchToProps = dispatch => {
  // restaurant : is an argument, comes from handleSubmit. 
  // we pass it as an argument to the action in dispatch. 
  // the action.type is ADD_RESTAURANT
  return { addRestaurant: (restaurant) =>{

    dispatch(addRestaurant(restaurant))
  }}
}
//connect this component by wrapping RestaurantInput below
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantInput)
