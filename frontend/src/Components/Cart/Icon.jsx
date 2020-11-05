import React from "react";

const Icon = ({ onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <i className="far fa-shopping-cart"></i>
      Cart
    </div>
  );
};

export default Icon;
