import React from "react";
import PropTypes from "react";

const CustomInput = (props) => {
  return (
    <div className="inline">
      <input
        className="h-10 w-72 p-2 border-2 text-lg"
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
      ></input>
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.function,
  required: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
};

export default CustomInput;
