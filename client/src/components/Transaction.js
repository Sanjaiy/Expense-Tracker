import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transactions }) {
  const { deleteTransactions } = useContext(GlobalContext);
  const sign = transactions.amount < 0 ? "-" : "+";

  return (
    <li className={transactions.amount < 0 ? "minus" : "plus"}>
      {transactions.text}{" "}
      <span>
        {sign}&#8377;{Math.abs(transactions.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransactions(transactions.id)}
      >
        x
      </button>
    </li>
  );
}
