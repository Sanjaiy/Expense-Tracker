import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

// const ACTIONS = {
//   DELETE_TRANSACTION: "delete",
//   ADD_TRANSACTION: "add",
// };

//Initial State
const initialstate = {
  transactions: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      console.log(res);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: { data: res.data.data },
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: { error: error.response.data.error },
      });
    }
  }

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
