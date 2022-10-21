import React, { useState, Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableEmployee from "./tableEmployee.jsx";
import "jspdf-autotable";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default class listEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    axios
      .post("http://localhost:5000/api/employee/")
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
        <Header />
        <Card
          style={{ width: "100%", height: "3rem" }}
          className="card text-white bg-info mb-2">
          <Card.Body>
            <h5>Employee Management</h5>
            <Button
              variant="outline-primary"
              href="http://127.0.0.1:5173/employee"
              className="mr-1">
              Add Employee
            </Button>
            <Button
              variant="outline-secondary"
              href="http://127.0.0.1:5173/report_attendance">
              Attendance
            </Button>
          </Card.Body>
        </Card>
        <div className="container">
          <br />
          <br />
          <div style={{ marginTop: "-38px", marginLeft: "230px" }}>
            <ReactHTMLTableToExcel
              className="btn btn-outline-success"
              table="table"
              filename="Employee Details"
              sheet="Sheet"
              buttonText="Generate Sheet"
            />
          </div>
          <div
            className="float-end"
            style={{ marginTop: "-30px", marginLeft: "190px" }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search here"
              name="searchQuery"></input>
          </div>

          <Table
            className="table"
            id="table"
            striped
            bordered
            hover
            variant="light">
            <thead>
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">NIC</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>

          <p>
            <b>Employee count: {this.state.employees.length}</b>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
