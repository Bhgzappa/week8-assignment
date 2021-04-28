const patientsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PATIENTS":
      return {
        ...state,
        patients: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default patientsReducer;
