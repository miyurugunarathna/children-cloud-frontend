import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form, Container, Row, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.jsx";
import logo from "../assets/img/logo.png";
import Footer from "../components/Footer.jsx";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const employeeUpdate = (props) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [state, setState] = useState({
    empID: "",
    fullName: "",
    address: "",
    nic: "",
    phoneNo: "",
    dob: "",
    recruitDate: "",
  });

  const { empID, fullName, address, nic, phoneNo, dob, recruitDate } = state;

  //search
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    fetch("http://localhost:5000/api/employee/")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].empID + "->" + res.data[i].fullName);
        }
        setMyOptions(myOptions);
      });
  };

  // Handle Change for Input Fields
  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({ empID, fullName, address, nic, phoneNo, dob, recruitDate });
    axios
      .put(
        `http://localhost:5000/api/employee/${id}`,
        { empID, fullName, address, nic, phoneNo, dob, recruitDate },
        {},
      )
      .then((response) => {
        console.log(response);
        const { empID, fullName, address, nic, phoneNo, dob, recruitDate } =
          response.data;

        //empty state
        setState({
          ...state,
          empID,
          fullName,
          address,
          nic,
          phoneNo,
          dob,
          recruitDate,
        });
        //show success alert
        // alert(`Staff Member ${firstName} is Updated`);
        Swal.fire(
          `Staff Member ${firstName} is Updated`,
          "Click Ok to continue",
          "success",
        );
      })
      .catch((error) => {
        console.log(error.Response);
        // alert(error.response.data.error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.error}`,
          footer: "Please try again",
        });
      });
  };

  return (
    <div className="App">
      <Header tab="Children Cloud" />
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6">
            <div style={{ marginLeft: "20%", marginTop: "110px" }}>
              <Autocomplete
                style={{ width: 500 }}
                disablePortal
                id="combo-box-demo"
                options={myOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={getDataFromAPI}
                    variant="outlined"
                    label="Search Employee"
                  />
                )}
              />
            </div>
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Employee Management</h3>

                    <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={"form-control "}
                          id="floatingInput"
                          name="empID"
                          placeholder="emp1012"
                          onChange={handleChange("empID")}
                          value={empID}
                        />
                        <label htmlFor="floatingInput">Employee ID</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={"form-control "}
                          id="floatingInput"
                          name="fullName"
                          placeholder="employee name"
                          onChange={(event) => {
                            setFullName(event.target.value);
                          }}
                        />
                        <label htmlFor="floatingInput">
                          Employee Full Name
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={"form-control "}
                          id="floatingInput"
                          name="address"
                          placeholder="address"
                          onChange={(event) => {
                            setAddress(event.target.value);
                          }}
                        />
                        <label htmlFor="floatingInput">Contact number</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className={"form-control "}
                          id="floatingInput"
                          name="phoneNo"
                          placeholder="071xxxxxxxx"
                          onChange={(event) => {
                            setPhoneNo(event.target.value);
                          }}
                        />
                        <label htmlFor="floatingInput">Phone Number</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className={"form-control "}
                          id="floatingPassword"
                          name="dob"
                          placeholder="dob"
                          onChange={(event) => {
                            setDob(event.target.value);
                          }}
                        />
                        <label htmlFor="floatingPassword">Date Of Birth</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className={"form-control "}
                          id="floatingPassword"
                          name="recruiteDate"
                          placeholder="recruiteDate"
                          onChange={(event) => {
                            setRecruitDate(event.target.value);
                          }}
                        />
                        <label htmlFor="floatingPassword">Recruite Date</label>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-sm btn btn-warning btn-login text-uppercase fw-bold mb-2"
                          type="submit">
                          Update
                        </button>
                        <div className="text-center">
                          <p className="p1"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default employeeUpdate;
