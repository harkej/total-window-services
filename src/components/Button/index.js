import React from "react";
import './style.css';

const Button = ({ children, type, id, onClick, className }) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
