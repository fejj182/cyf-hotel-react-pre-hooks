import React from "react";

const Customer = props => {
  const customer = props.customer;
  return (
    <tr>
      <th scope="row">{customer.id}</th>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
    </tr>
  );
};

export default Customer;
