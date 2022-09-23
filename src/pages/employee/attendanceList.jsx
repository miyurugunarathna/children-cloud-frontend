import React, { useState, Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableEmployee from "./attendanceTable.jsx";
import "jspdf-autotable";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

export default class listAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/employee/")
      .then((res) => {
        if (res.data && res.data?.data) {
          console.log(res.data.data);
          this.setState({
            employees: res.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  DataTable() {
    return this.state.employees.map((res, i) => {
      return <TableEmployee obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Header tab="Children Cloud" />
        <div className="container">
          <br />
          <Card style={{ width: "25rem", height: "4rem" }}>
            {" "}
            <Card.Body>
              {" "}
              <h4 className="login-heading mb-9">Employee Attendance</h4>
            </Card.Body>
          </Card>
          <br />
          <div>
            <div>
              <div className="row">
                <div className="col-md-4">
                  <Form.Group controlId="dob">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <br />
            <Table
              id="table"
              className="table"
              striped
              bordered
              hover
              variant="light">
              <thead>
                <tr>
                  <th scope="col">Employee ID</th>
                  <th scope="col">IN Time</th>
                  <th scope="col">Out Time</th>
                  <th scope="col">Total Hrs</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>{this.DataTable()}</tbody>
            </Table>
          </div>
          <div>
            <button className="btn btn-primary">
              <a className="text-decoration-none text-white">Submit</a>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
