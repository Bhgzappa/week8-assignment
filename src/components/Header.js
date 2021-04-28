import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";
import { StaffContext } from "../contexts/StaffContext";

const Header = () => {
  const { staffInfo, logout } = useContext(StaffContext);

  const handlelogout = () => {
    logout();
  };

  return (
    <Navbar className="bg-primary navbar-expand text-white">
      <Container>
        <Navbar.Brand className="text-white">BULENGA H/C</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Link to="/patients" className="nav-link text-white">
              PATIENTS
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addpatient" className="nav-link text-white">
              ADD
            </Link>
          </Nav.Item>
          {staffInfo.name ? (
            <>
              <Nav.Item>
                <Link onClick={handlelogout} className="nav-link text-white">
                  <FiPower />
                </Link>
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Item>
                <Link to="/login" className="nav-link text-white">
                  SIGN IN
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/register" className="nav-link text-white">
                  SIGN UP
                </Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
