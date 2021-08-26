import React from "react";

const Person = (props) => {
  const { name, country } = props;
  return (
    <div>
      <h2> Hello Everyone! I am {name}! </h2>
      <h3> I am from {country} </h3>
    </div>
  );
};

export default Person;
