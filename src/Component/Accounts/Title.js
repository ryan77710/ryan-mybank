import React from "react";

const Title = (props) => {
  return (
    <div
      style={props.index === 0 ? { backgroundColor: "#1b76d1" } : {}}
      className="Title"
    >
      <p>{props.name}</p>
      <em>{props.balance}</em>
    </div>
  );
};

export default Title;
