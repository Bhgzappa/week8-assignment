import { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Col, Form, Button, Row } from "react-bootstrap";
import { StaffContext } from "../contexts/StaffContext";

const RegisterStaffScreen = () => {
  const history = useHistory();
  const location = useLocation();

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerStaff, staffInfo } = useContext(StaffContext);

  const redirect = location.search ? location.search.split("=")[1] : "/login";

  useEffect(() => {
    if (staffInfo.name) {
      history.push(redirect);
    }
  }, [staffInfo, history, redirect]);

  function handlesubmit(e) {
    e.preventDefault();
    const newstaff = {
      name,
      email,
      password,
    };
    registerStaff(newstaff);
  }

  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row className="justify-content-md-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="border border-white mt-5 p-3"
        >
          <Form
            onSubmit={handlesubmit}
            style={{
              display: "grid",
              border: "1px solid white",
            }}
          >
            <Form.Group>
              <h3 className="text-center">SIGN UP</h3>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter Name"
                value={name}
                onChange={(text) => setname(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter Email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </Form.Group>
            <Button type="submit">SIGN UP</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterStaffScreen;
