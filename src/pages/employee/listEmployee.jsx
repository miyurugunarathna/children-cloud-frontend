import React, { useState, Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableEmployee from "./tableEmployee.jsx";
import "jspdf-autotable";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
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
          <Card style={{ width: "15rem", height: "4rem" }} border="primary">
            {" "}
            <Card.Body>
              {" "}
              <h4 className="login-heading mb-9">Employee List</h4>
            </Card.Body>
          </Card>
          <br />

          <button className="btn btn-primary">
            <a
              href="/employeeReg.jsx"
              className="text-decoration-none text-white">
              Add Employee
            </a>
          </button>
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

          <Table id="table" className="table">
            <thead>
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">NIC</th>
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
