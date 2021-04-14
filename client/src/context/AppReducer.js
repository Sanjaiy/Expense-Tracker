export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload.data,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (a) => a.id !== action.payload.id
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload.transaction, ...state.transactions],
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
