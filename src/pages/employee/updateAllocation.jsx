import React, { useState, Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableBabySitter from "./tableUpdateBabysitter.jsx";
import "jspdf-autotable";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default class updateAllocation extends Component {
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
      return <TableBabySitter obj={res} key={i} />;
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
            <h5>BabySitter Allocation</h5>
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
                <th scope="col">BabySitter</th>
                <th scope="col">Child01</th>
                <th scope="col">Child02</th>
                <th scope="col">Child03</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>

          <p>
            <b>Allocation count: {this.state.babysitters.length}</b>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
