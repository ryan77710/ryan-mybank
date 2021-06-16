import React from "react";

const Operation = (props) => {
  return (
    <div className="Operation">
      <b>{props.date}</b>
      <div className="op-info">
        <em>{props.description}</em>
        <strong>{props.amount.toFixed(2)} €</strong>
      </div>
    </div>
  );
};

export default Operation;
