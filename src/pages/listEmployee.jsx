import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableEmployee from "./tableEmployee.jsx";
import "jspdf-autotable";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

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
          <h2>Employee List</h2>
          <br />
          <p>
            <button className="btn btn-primary">
              <a
                href="/employeeReg.jsx"
                className="text-decoration-none text-white">
                Add Employee
              </a>
            </button>

            <div
              className="float-end"
              style={{ marginTop: "-30px", marginLeft: "190px" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search here"
                name="searchQuery"></input>
            </div>
          </p>
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
        </div>
        <Footer />
      </div>
    );
  }
}