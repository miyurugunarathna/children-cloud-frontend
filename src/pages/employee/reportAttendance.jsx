import React, { useState, Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableAttendance from "./tableAttendance.jsx";
import "jspdf-autotable";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default class reportAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendances: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/attendance/")
      .then((res) => {
        if (res.data && res.data?.data) {
          console.log(res.data.data);
          this.setState({
            attendances: res.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  DataTable() {
    return this.state.attendances.map((res, i) => {
      return <TableAttendance obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Card
          style={{ width: "100%", height: "3rem" }}
          className="card text-white bg-success mb-2">
          <Card.Body>
            <h5>Attendance Report</h5>
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

          <Table id="table" className="table">
            <thead>
              <tr>
                <th scope="col">Employee</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
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
