import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Accounts from "./Component/Accounts/Accounts";
function App() {
  return (
    <div className="body">
      <header>
        <Header></Header>
        <Accounts></Accounts>
      </header>
    </div>
  );
}

export default App;
