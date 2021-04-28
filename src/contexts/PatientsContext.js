import { createContext, useReducer } from "react";
import patientsReducer from "../reducers/patientsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  patients: [],
  error: null,
};

export const PatientsContext = createContext();

const PatientsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(patientsReducer, initialState);
  //get all patients
  async function getPatients() {
    const res = await axios.get(
      "https://halik-patients-api.herokuapp.com/api/patients"
    );
    try {
      dispatch({
        type: "GET_ALL_PATIENTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PatientsContext.Provider
      value={{ getPatients, patients: state.patients, loading: state.loading }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export default PatientsContextProvider;