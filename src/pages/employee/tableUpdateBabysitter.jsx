import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
export default class tableUpdateBabysitter extends Component {
  constructor(props) {
    super(props);
    this.deleteBabysitter = this.deleteBabysitter.bind(this);
    // this.deletepm= this.deletepm.bind(this);
  }

  deleteBabysitter() {
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
          .delete("http://localhost:5000/api/babySitter/" + this.props.obj._id)
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Chils allocation Deleted Successfully",
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
      this.props.history.push("http://127.0.0.1:5173/updateallocation");
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
        <td>{this.props.obj.BabySitter}</td>
        <td>{this.props.obj.child01}</td>
        <td>{this.props.obj.child02}</td>
        <td>{this.props.obj.child03}</td>
        <td>
          <Button
            variant="outline-primary"
            className="mr-1"
            href={"#" + this.props.obj._id}>
            Edit
          </Button>

          <Button variant="outline-danger" onClick={this.deleteBabysitter}>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
