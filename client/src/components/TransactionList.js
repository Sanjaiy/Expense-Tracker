import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length !== 0 ? (
          transactions.map((a) => <Transaction key={a.id} transactions={a} />)
        ) : (
          <p>No Transactions Yet</p>
        )}
      </ul>
    </>
  );
}
