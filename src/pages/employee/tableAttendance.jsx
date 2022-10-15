import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import moment from "moment";

export default class tableEmployee extends Component {
  constructor(props) {
    super(props);
    this.Approved = this.Approved.bind(this);
    // this.deletepm= this.deletepm.bind(this);
  }

  Approved() {
    Swal.fire({
      title: "Attendance approved",
      text: "Do you want approved",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:5000/api/attendance/")
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Submission Type Deleted Successfully",
              icon: "Danger",
              confirmButtonText: "Close",
            }).then(function () {
              location.reload();
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.props.history.push("http://127.0.0.1:5173/");
    });
  }
  eventClick = () => {
    // this.props.history.push(
    //   "http://127.0.0.1:5173/update/" + this.props.obj._id,
    // );
  };
  render() {
    return (
      <tr>
        <td>{this.props.obj.EmpID}</td>
        <td>{this.props.obj.Status}</td>
        <td>{moment.utc(this.props.obj.time).format("DD/MM/YYYY")}</td>
        <td>
          &nbsp;
          <a
            className="btn btn-success text-decoration-none text-white"
            onClick={this.Approved}>
            <i className="far fa-trash-alt"></i>&nbsp;Approve
          </a>
        </td>
      </tr>
    );
  }
}
