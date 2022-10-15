import React, { useState, Component } from "react";
import axios from "axios";
import Header from "../../components/Header";
import StaffSidebar from "../../components/StaffSidebar";
import TableBabysitter from "../employee/tableBabySitter.jsx";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "jspdf-autotable";
import Table from "react-bootstrap/Table";
import Footer from "../../components/Footer.jsx";

export default class assignedKids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      babysitters: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/babySitter/")
      .then((res) => {
        if (res.data && res.data?.data) {
          console.log(res.data.data);
          this.setState({
            babysitters: res.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  DataTable() {
    return this.state.babysitters.map((res, i) => {
      return <TableBabysitter obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Header />
        <StaffSidebar />
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
          <Card
            style={{ width: "100%", height: "3rem" }}
            className="card text-white bg-success mb-2">
            <Card.Body>
              <h5>My Kids</h5>
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
              id="table"
              className="table"
              striped
              bordered
              hover
              variant="light">
              <thead>
                <tr>
                  <th scope="col">BabySitter</th>
                  <th scope="col">Child 01</th>
                  <th scope="col">Child 02</th>
                  <th scope="col">Child 03</th>
                </tr>
              </thead>
              <tbody>{this.DataTable()}</tbody>
            </Table>
          </div>
          <p>
            <b>Assigned count: {this.state.babysitters.length}</b>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
