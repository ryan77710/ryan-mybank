import React from "react";
import Title from "./Title";
import Operation from "./Operation";
const Account = (props) => {
  return (
    <div className="Account ">
      <Title
        index={props.index}
        name={props.name}
        balance={props.balance}
      ></Title>
      <div className="operation-container">
        {props.account.operations.map((op, index) => {
          return (
            <Operation
              key={index}
              date={op.date}
              description={op.description}
              amount={op.amount}
            ></Operation>
          );
        })}
      </div>
      <button>SEE MORE</button>
    </div>
  );
};

export default Account;
