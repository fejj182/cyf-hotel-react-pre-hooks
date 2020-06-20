import React from "react";

import Bookings from "./Bookings";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Restaurant from "./components/restaurant/Restaurant";
import TouristInfoCards from "./components/TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        contactInfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
