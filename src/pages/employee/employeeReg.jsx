import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import { color, positions } from "@mui/system";

function employeeReg() {
  const [empID, setEmpID] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");
  const [recruitDate, setRecruitDate] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/employee/add", {
        empID: empID,
        fullName: fullName,
        address: address,
        nic: nic,
        phoneNo: phoneNo,
        dob: dob,
        recruitDate: recruitDate,
        image: image,
        type: type,
      });
      setEmpID("");
      setFullName("");
      setAddress("");
      setNic("");
      setPhoneNo("");
      setDob("");
      setRecruitDate("");
      setImage("");
      setType("");
      Swal.fire({
        title: "Success!",
        text: "Profile Created Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        location.reload();
      });
    } catch (err) {
      alert("Employee Registration Failed");
    }
  }

  return (
    <div className="App">
      <Header tab="Children Cloud" />
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-lg-1 mx-auto">
                    <Card
                      style={{ width: "50rem", height: "4rem" }}
                      border="primary">
                      {" "}
                      <Card.Body>
                        <h4>Employee Management</h4>
                      </Card.Body>
                    </Card>
                    <br />
                    <Card style={{ width: "50rem" }}>
                      <Card.Body>
                        <form onSubmit={handleSubmit}>
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className={"form-control "}
                              id="floatingInput"
                              name="empID"
                              placeholder="emp1012"
                              required
                              onChange={(event) => {
                                setEmpID(event.target.value);
                              }}
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
                              required
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
                            <label htmlFor="floatingInput">Address</label>
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className={"form-control "}
                              id="floatingInput"
                              name="nic"
                              placeholder="nic"
                              required
                              onChange={(event) => {
                                setNic(event.target.value);
                              }}
                            />
                            <label htmlFor="floatingInput">NIC</label>
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className={"form-control "}
                              id="floatingInput"
                              name="phoneNo"
                              required
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
                            <label htmlFor="floatingPassword">
                              Date Of Birth
                            </label>
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="date"
                              className={"form-control "}
                              id="floatingPassword"
                              name="recruiteDate"
                              placeholder="recruiteDate"
                              required
                              onChange={(event) => {
                                setRecruitDate(event.target.value);
                              }}
                            />
                            <label htmlFor="floatingPassword">
                              Recruite Date
                            </label>
                          </div>

                          <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Employee Photograph</Form.Label>
                            <Form.Control
                              type="file"
                              onChange={(event) => {
                                setImage(event.target.value);
                              }}
                            />
                          </Form.Group>
                          <Form.Select
                            aria-label="Default select example"
                            type="text"
                            required
                            onChange={(event) => {
                              setType(event.target.value);
                            }}>
                            <option>Employee Type</option>
                            <option value="BabySitter">BabySitter</option>
                            <option value="Clerk">Clerk</option>
                            <option value="Manager">Manager</option>
                          </Form.Select>
                          <br />
                          <div className="d-grid">
                            <button
                              className="btn btn-sm btn-primary btn-login text-uppercase fw-bold mb-2"
                              type="submit">
                              Submit
                            </button>
                            <div className="text-center">
                              <p className="p1"></p>
                            </div>
                          </div>
                        </form>
                      </Card.Body>
                    </Card>
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
}
export default employeeReg;
