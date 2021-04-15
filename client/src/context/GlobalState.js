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
  async function deleteTransactions(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({ type: "DELETE_TRANSACTION", payload: { id: id } });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: { error: error.response.data.error },
      });
    }
  }

  async function addTransactions(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/api/v1/transactions/",
        transaction,
        config
      );
      dispatch({
        type: "ADD_TRANSACTION",
        payload: { transaction: res.data.data },
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: { error: error.response.data.error },
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
