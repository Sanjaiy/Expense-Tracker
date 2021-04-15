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
          (a) => a._id !== action.payload.id
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload.transaction],
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
