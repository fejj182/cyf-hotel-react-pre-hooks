import React, { Component } from "react";

class Customer extends Component {
  state = {
    selected: false
  };

  selectRow = () => {
    this.setState(prevState => {
      return {
        selected: !prevState.selected
      };
    });
  };

  render() {
    const customer = this.props.customer;
    return (
      <tr
        className={this.state.selected ? "selected" : ""}
        onClick={this.selectRow}
      >
        <th scope="row">{customer.id}</th>
        <td>{customer.title}</td>
        <td>{customer.firstName}</td>
        <td>{customer.surname}</td>
      </tr>
    );
  }
}

export default Customer;
