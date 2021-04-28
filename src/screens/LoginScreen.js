import { useState, useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { StaffContext } from "../contexts/StaffContext";

const LoginScreen = ({ history, location }) => {
  const { loginStaff, staffInfo } = useContext(StaffContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (staffInfo.token_id) {
      history.push(redirect);
    }
  }, [staffInfo, history, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    const loginstaff = {
      email,
      password,
    };
    loginStaff(loginstaff);
  }

  return (
    <div style={{
      width:"28%",
    }}>
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr",
          gridGap: 15,
          padding: "20px",
          border: "1px solid white",
        }}
      >
        <h3 className="text-center">LOG IN </h3>
        <Form.Control
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">LOG IN</Button>
      </Form>
    </div>
  );
};

export default LoginScreen;
