import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
export default class tableEmployee extends Component {
  constructor(props) {
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    // this.deletepm= this.deletepm.bind(this);
  }

  deleteEmployee() {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this Employee?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("http://localhost:5000/api/employee/" + this.props.obj._id)
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
      this.props.history.push("http://127.0.0.1:5173/list");
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
        <td>{this.props.obj.empID}</td>
        <td>{this.props.obj.fullName}</td>
        <td>{this.props.obj.nic}</td>
        <td>{this.props.obj.type}</td>

        <td>
          <Button
            variant="outline-primary"
            className="mr-1"
            href={"http://127.0.0.1:5173/update/" + this.props.obj._id}>
            Edit
          </Button>

          <Button variant="outline-danger" onClick={this.deleteEmployee}>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
