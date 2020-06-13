import React from "react";

const Footer = props => {
  const contactInfo = props.contactInfo;
  return (
    <div>
      <ul>
        {contactInfo.map(line => {
          return <li>{line}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
