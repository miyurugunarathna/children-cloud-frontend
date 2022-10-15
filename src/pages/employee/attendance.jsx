import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";

function myAttendance() {
  const [EmpID, setEmpID] = useState("");
  const [Status, setStatus] = useState("");
  const [Reason, setReason] = useState("");
  const [Message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/attendance/save", {
        EmpID: EmpID,
        Status: Status,
        Reason: Reason,
        Message: Message,
      });
      setEmpID("");
      setStatus("");
      setReason("");
      setMessage("");
      console.log("success");
      Swal.fire({
        title: "Success!",
        text: "Attendance saved Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        location.reload();
      });
    } catch (err) {
      alert("Attendance saved faild");
    }
  }

  return (
    <div className="App">
      <Header />
      <Card
        style={{ width: "100%", height: "4rem" }}
        className="card text-white bg-success mb-2">
        <Card.Body>
          <h4>My Attendance</h4>
        </Card.Body>
      </Card>
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-lg-1 mx-auto">
                    <Card style={{ width: "50rem" }}>
                      <Card.Body>
                        <form onSubmit={handleSubmit}>
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className={"form-control "}
                              id="floatingInput"
                              name="EmpID"
                              placeholder="Emp-102"
                              required
                              onChange={(event) => {
                                setEmpID(event.target.value);
                              }}
                            />
                            <label htmlFor="floatingInput">Employee ID</label>
                          </div>
                          <Form.Select
                            aria-label="Default select example"
                            type="text"
                            required
                            onChange={(event) => {
                              setStatus(event.target.value);
                            }}>
                            <option>Status</option>
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                            <option value="HalfDay">HalfDay</option>
                          </Form.Select>
                          <br />
                          If you absent put reason!!
                          <Form.Select
                            aria-label="Default select example"
                            type="text"
                            onChange={(event) => {
                              setReason(event.target.value);
                            }}>
                            <option>Reason</option>
                            <option value="Sick">Sick</option>
                            <option value="ApprovedLeave">
                              Approved Leave
                            </option>
                            <option value="Other">Other</option>
                          </Form.Select>
                          <br />
                          <Form.Group
                            controlId="exampleForm.ControlTextarea1"
                            aria-label="Default select example"
                            type="text"
                            onChange={(event) => {
                              setMessage(event.target.value);
                            }}>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows="3"
                              name="address"
                            />
                          </Form.Group>
                          <br />
                          <div className="d-grid">
                            <button
                              className="btn btn-sm btn-primary btn-login text-uppercase fw-bold mb-2"
                              type="submit">
                              Submit
                            </button>

                            <button
                              className="btn btn-sm btn-warning btn-login text-uppercase fw-bold mb-2"
                              type="">
                              View My Attendance
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
export default myAttendance;
