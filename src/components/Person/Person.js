import React from "react";
import PropTypes from "prop-types";
// import "./style.css";

const Person = (props) => {
  const { name, country } = props;
  return (
    <div className="container" style={styleSheet}>
      <h2> Hello Everyone! I am {name}! </h2>
      <h3> I am from {country} </h3>
    </div>
  );
};

const styleSheet = {
  padding: "50px",
  color: "#afeccf",
  background: " rgb(42, 2, 2)",
  fontSize: "20px",
};
Person.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
export default Person;
