import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header(prop) {
  let navigate = useNavigate();
  const routeChange = (props) => {
    console.log(props);
    navigate(props);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ padding: "10px" }}>
      <Container fluid>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Brand
          style={{ fontWeight: "bold", fontSize: "2rem", color: "#8eaccb	" }}>
          {prop.tab}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link href="http://127.0.0.1:5173/employee">Home</Nav.Link>
            <Nav.Link href="http://127.0.0.1:5173/list">Employees</Nav.Link>
            <Nav.Link href="http://127.0.0.1:5173/attendance">
              Attendance
            </Nav.Link>
            <Nav.Link href="#">Report</Nav.Link>
            {/* disabled */}
            <Nav.Link
              onClick={() => {
                navigate(`#`);
              }}>
              Children Allocation
            </Nav.Link>
          </Nav>

          {
            <Button
              variant="danger"
              style={{ marginLeft: "2rem" }}
              onClick={() => routeChange("#")}>
              Logout
            </Button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
