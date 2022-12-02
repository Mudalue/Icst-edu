import React from "react";

const Button = ({ text, onclick, size, color, width, disabled }) => {
  return (
    <button
      className={`btn btn-${size} text-light fw-bold`}
      style={{
        backgroundColor: `${color}`,
        boxShadow: "none",
        padding: "5px 20px",
        width: `${width}`,
        fontSize: 14,
        fontWeight: 500,
        borderRadius: 14
      }}
      onClick={onclick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
