import React from "react";

const TouristInfoCards = () => {
  const touristWebsites = [
    {
      name: "Glasgow",
      url: "https://peoplemakeglasgow.com",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Glasgow-George-Square.jpg/250px-Glasgow-George-Square.jpg"
    },
    {
      name: "Manchester",
      url: "https://visitmanchester.com",
      imageSrc:
        "https://whizzardhelicopters.co.uk/sitev1/wp-content/uploads/2015/12/Media-City.jpg"
    },
    {
      name: "London",
      url: "https://visitlondon.com",
      imageSrc:
        "https://www.visitbritainshop.com/espana/~/media/images/subcategory/london-passes.ashx"
    }
  ];
  return (
    <div id="tourist-info-cards">
      {touristWebsites.map((city, index) => {
        return (
          <div className="card" key={index}>
            <img
              src={city.imageSrc}
              className="card-img-top"
              alt={"image of " + city.name}
            />
            <div className="card-body">
              <a href={city.url} target="_" className="btn btn-primary">
                Go to {city.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
