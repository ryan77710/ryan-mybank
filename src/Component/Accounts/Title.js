import React from "react";

const Title = (props) => {
  return (
    <div className="Title">
      <p>{props.name}</p>
      <em>{props.balance}</em>
    </div>
  );
};

export default Title;
