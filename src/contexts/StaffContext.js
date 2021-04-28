import { createContext, useReducer } from "react";
import staffReducer from "../reducers/staffReducer";
import axios from "axios";

const initialState = {
  loading: true,
  staffInfo: {},
  error: null,
};

export const StaffContext = createContext();

const StaffContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(staffReducer, initialState);

  //login action
  async function loginStaff(staff) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://halik-patients-api.herokuapp.com/api/staff/login",
      staff,
      config
    );

    localStorage.setItem("staffInfo", res.data.token_id);

    console.log(res);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
  }
  //logout
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  //register staff
  async function registerStaff(newstaff) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://halik-patients-api.herokuapp.com/api/staff/register",
        newstaff,
        config
      );

      dispatch({
        type: "REGISTER_STAFF",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <StaffContext.Provider
      value={{ staffInfo: state.staffInfo, loginStaff, registerStaff, logout }}
    >
      {children}
    </StaffContext.Provider>
  );
};

export default StaffContextProvider;
