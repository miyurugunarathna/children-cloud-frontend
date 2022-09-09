import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
export default class tableEmployee extends Component {
  constructor(props) {
    super(props);
    // this.deletepm= this.deletepm.bind(this);
  }
  deleteEmployee() {
    axios
      .delete("http://localhost:5000/api/employee/" + this.props.obj._id)
      .then((res) => {
        const Swal = require("sweetalert2");
        Swal.fire({
          title: "Success!",
          text: "Submission Type Deleted Successfully",
          icon: "Danger",
          confirmButtonText: "Close",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push("/listEmployee");
  }
  eventClick = () => {
    //this.props.history.push("/edit-submission/" + this.props.obj._id)
  };
  render() {
    return (
      <tr>
        <td>{this.props.obj.empID}</td>
        <td>{this.props.obj.fullName}</td>
        <td>{this.props.obj.nic}</td>

        <td>
          <a
            className="btn btn-warning text-decoration-none text-white"
            href={"/updateEmployee" + this.props.obj._id}>
            <i className="fas fa-edit"></i>&nbsp;Edit
          </a>
          &nbsp;
          <a
            className="btn btn-danger text-decoration-none text-white"
            onClick={this.deletepm}>
            <i className="far fa-trash-alt"></i>&nbsp;Delete
          </a>
        </td>
      </tr>
    );
  }
}
