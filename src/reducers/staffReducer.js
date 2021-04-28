const staffReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loading: false,
        staffInfo: action.payload,
      };
    case "REGISTER_STAFF":
      return {
        ...state,
        loading: false,
        staffInfo: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        staffInfo: "",
      };
    default:
      return state;
  }
};

export default staffReducer;