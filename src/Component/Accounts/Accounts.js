import React from "react";
import Account from "./Account";
import compte from "../../compte.json";
// import Operation from "./Operation";
const tab = compte;
const Accounts = () => {
  return (
    <div className="Accounts contener">
      {tab.map((account, index) => {
        return (
          <Account
            index={index}
            key={index}
            name={account.name}
            balance={`${account.balance.toFixed(2)} €`}
            account={account}
          ></Account>
        );
      })}
    </div>
  );
};

export default Accounts;
