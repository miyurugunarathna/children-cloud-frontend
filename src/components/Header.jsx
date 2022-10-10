import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

function Header(prop) {
  let navigate = useNavigate();
  const routeChange = (props) => {
    console.log(props);
    navigate(props);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ padding: "15px" }}>
      <Container fluid>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Brand
          style={{ fontWeight: "bold", fontSize: "25PX", color: "#FFF" }}>
          {prop.tab}
          Children Cloud
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Employee" id="nav-dropdown">
              <NavDropdown.Item
                eventKey="Basic Pricing"
                href="http://127.0.0.1:5173/employee">
                Registration
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="Corporate Pricing"
                href="http://127.0.0.1:5173/list">
                List
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="Corporate Pricing"
                href="http://127.0.0.1:5173/attendance">
                Attendance
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="Corporate Pricing" href="#">
                Report
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="#">Report</Nav.Link>
            <Nav.Link href="/bill">Bill Item</Nav.Link>
            <Nav.Link href="/payment">Payment</Nav.Link>
            <Nav.Link href="/bill-cal">Bill</Nav.Link>
            {/* disabled */}
            <Nav.Link href="/allocate"> Children Allocation </Nav.Link>
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
