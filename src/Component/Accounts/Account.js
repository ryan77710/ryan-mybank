import React from "react";
import Title from "./Title";
import Operation from "./Operation";
const Account = (props) => {
  return (
    <div className="Account ">
      <Title name={props.name} balance={props.balance}></Title>
      {props.account.operations.map((op) => {
        return (
          <Operation
            date={op.date}
            description={op.description}
            amount={op.amount}
          ></Operation>
        );
      })}

      <button>SEE MORE</button>
    </div>
  );
};

export default Account;
