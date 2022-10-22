import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import moment from "moment";
import Modal from "react-bootstrap/Modal";

export const tableEmployee = (obj, key) => {
  const [data, setData] = useState(obj);

  const Approved = () => {
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
          .put(`http://localhost:5000/api/attendance/status/${data.obj._id}`)
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
      //this.props.history.push("http://127.0.0.1:5173/");
    });
  };
  const eventClick = () => {
    // this.props.history.push(
    //   "http://127.0.0.1:5173/update/" + this.props.obj._id,
    // );
  };
  useEffect(() => {
    console.log(obj, key);
  }, []);

  return (
    <tr>
      <td>{data.obj.EmpID}</td>
      <td>{data.obj.Status}</td>
      <td>{moment.utc(data.obj.time).format("DD/MM/YYYY")}</td>
      <td>{data.obj.Approved}</td>
      <td>
        <Button variant="outline-primary" className="mr-1" onClick={Approved}>
          Approve
        </Button>

        <Button variant="outline-danger">View</Button>
      </td>
    </tr>
  );
};
