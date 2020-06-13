import React from "react";

const Footer = props => {
  const contactInfo = props.contactInfo;
  return (
    <div>
      <ul>
        {contactInfo.map((line, index) => {
          return <li key={index}>{line}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
