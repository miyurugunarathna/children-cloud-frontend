import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendances: [],
    };
    //   const [EmpID, setEmpID] = useState("");
    //   const [INtime, setINtime] = useState("");
    //   const [OUTtime, setOUTtime] = useState("");
    //   const [TotalHrs, setTotalHrs] = useState("");

    // async function  handleSubmit() {
    //     axios.post("http://localhost:5000/api/attendance/save", {
    //       EmpID: EmpID,
    //       INtime: INtime,
    //       OUTtime: OUTtime,
    //       TotalHrs: TotalHrs,
    //     });
    //     setEmpID("");
    //     setINtime("");
    //     setOUTtime("");
    //     setTotalHrs("");
    //   }
  }
  handleSubmit() {
    axios
      .post("http://localhost:5000/api/attendance/save")
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

  render() {
    return (
      <tr>
        <td>{this.props.obj.empID}</td>
        <td>
          <input type="time" />
        </td>
        <td>
          <input type="time" />
        </td>
        <td>
          <input type="number" />
        </td>
        <td>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </td>
      </tr>
    );
  }
}
