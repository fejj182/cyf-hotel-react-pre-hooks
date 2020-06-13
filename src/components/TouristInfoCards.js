import React from "react";

const TouristInfoCards = () => {
  const touristWebsites = [
    "https://peoplemakeglasgow.com",
    "https://visitmanchester.com",
    "https://visitlondon.com"
  ];
  return (
    <div>
      {touristWebsites.map(url => {
        return (
          <div className="card">
            <img src="#" className="card-img-top" />
            <div className="card-body">
              <a href={url} target="_" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
