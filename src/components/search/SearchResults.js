import React from "react";
import CustomerRow from "./Customer";

const SearchResults = props => {
  const results = props.results;
  return (
    <div id="search-results">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => {
            return <CustomerRow key={index} customer={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
