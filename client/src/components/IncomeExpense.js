import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const incomeTotal = amounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expenseTotal =
    amounts
      .filter((transaction) => transaction < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">&#8377;{numberWithCommas(incomeTotal)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">&#8377;{numberWithCommas(expenseTotal)}</p>
      </div>
    </div>
  );
}
