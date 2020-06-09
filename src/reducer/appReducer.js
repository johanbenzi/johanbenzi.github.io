export const appInitialState = {
  loading: false,
  error: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FINISH_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.errorMessage,
      };
    default:
      return { ...state, appInitialState };
  }
};
