import React, { useState, useContext } from "react";
import Alert from "./Alert";
import { GlobalContext } from "../context/GlobalState";
import { v4 } from "uuid";

export default function AddTransaction() {
  const { addTransactions, error } = useContext(GlobalContext);
  const [text, settext] = useState("");
  const [amount, setCash] = useState();

  const newTransaction = (e) => {
    e.preventDefault();

    const transaction = {
      id: v4(),
      text: text,
      amount: +amount,
    };

    addTransactions(transaction);

    settext("");
    setCash("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      {!error ? "" : error.map((e) => <Alert key={e} error={e} />)}
      <form onSubmit={newTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            {" "}
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setCash(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
}
