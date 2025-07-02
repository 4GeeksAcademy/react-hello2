import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter">
      <div className="digit-box">
        <i className="far fa-clock"></i>
      </div>
      {digits.map((digit, index) => (
        <div className="digit-box" key={index}>
          {digit}
        </div>
      ))}
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
