import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class tableBabySitter extends Component {
  constructor(props) {
    super(props);
    this.deleteBabySitter = this.deleteBabySitter.bind(this);
  }
  deleteBabySitter() {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this?",
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
      this.props.history.push("http://127.0.0.1:5173/allocate");
    });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.BabySitter}</td>
        <td>{this.props.obj.child01}</td>
        <td>{this.props.obj.child02}</td>
        <td>{this.props.obj.child03}</td>
      </tr>
    );
  }
}
