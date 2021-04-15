import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length !== 0 ? (
          transactions.map((a) => <Transaction key={a._id} transactions={a} />)
        ) : (
          <p>No Transactions Yet</p>
        )}
      </ul>
    </>
  );
}
