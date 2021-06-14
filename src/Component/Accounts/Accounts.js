import React from "react";
import Account from "./Account";
import compte from "../../compte.json";
import Operation from "./Operation";
const tab = compte;
const Accounts = () => {
  return (
    <div className="Accounts contener">
      {tab.map((account, index) => {
        return (
          <Account
            key={index}
            name={account.name}
            balance={`${account.balance} €`}
            account={account}
          ></Account>
        );
      })}
    </div>
  );
};

export default Accounts;
