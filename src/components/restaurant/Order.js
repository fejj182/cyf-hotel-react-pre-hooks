import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends Component {
  state = {
    orders: 0
  };

  addOrder = () => {
    console.log("add Order");
    this.setState(prevState => {
      return {
        orders: prevState.orders + 1
      };
    });
  };
  render() {
    return (
      <li>
        {this.props.orderType}: {this.state.orders}
        <RestaurantButton addOrder={this.addOrder} />
      </li>
    );
  }
}

export default Order;
