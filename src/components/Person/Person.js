import React from "react";
import PropTypes from "prop-types";

const Person = (props) => {
  const { name, country } = props;
  return (
    <div>
      <h2> Hello Everyone! I am {name}! </h2>
      <h3> I am from {country} </h3>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
export default Person;
