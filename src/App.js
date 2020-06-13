import React from "react";

import Bookings from "./Bookings";
import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;
