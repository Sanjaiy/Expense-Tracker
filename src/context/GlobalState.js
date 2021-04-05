import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// const ACTIONS = {
//   DELETE_TRANSACTION: "delete",
//   ADD_TRANSACTION: "add",
// };

//Initial State
const initialstate = {
  transactions: [],
};

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  function deleteTransactions(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: { id: id } });
  }
  function addTransactions(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { transaction: transaction },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
