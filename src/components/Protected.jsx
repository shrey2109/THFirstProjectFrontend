import React from "react";
import PropTypes from "react";
import axios from "axios";

const Protected = (props) => {
  const userToken = localStorage.getItem("userToken");
  console.log(userToken);
  if (userToken) axios.defaults.headers.common["Authorization"] = userToken;
  else return <h1> USER IS NOT AUTHORIZED </h1>;
  return (
    <div>
      <props.component />
    </div>
  );
};

Protected.propTypes = {
  component: PropTypes.function,
};

export default Protected;
