import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Swal from "sweetalert2";
import { Button, Modal, Form } from "react-bootstrap";

const App = (props) => {
  const { id } = useParams();

  const [state, setState] = useState({
    empID: "",
    fullName: "",
    address: "",
    nic: "",
    phoneNo: "",
    dob: "",
    recruitDate: "",
    type: "",
  });

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  const fetchEmp = () => {
    console.log("working");
    axios
      .get(`http://localhost:5000/api/employee/`)
      .then((response) => {
        setEmp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEmp();
    axios
      .get(`http://localhost:5000/api/employee/${id}`)
      .then((response) => {
        console.log("user", response);
        console.log("data", response.data);
        const {
          empID,
          fullName,
          address,
          nic,
          phoneNo,
          dob,
          recruitDate,
          type,
        } = response.data.data;
        setState({
          ...state,
          empID,
          fullName,
          address,
          nic,
          phoneNo,
          dob,
          recruitDate,
          type,
        });
      })
      .catch((error) => console.log("Error loading update employee: " + error));
  }, []);

  function handleChange(name) {
    return function (event) {
      console.log(event.target.value);
      setState({ ...state, [name]: event.target.value });
    };
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({
      empID,
      fullName,
      address,
      nic,
      phoneNo,
      dob,
      recruitDate,
      type,
    });
    axios
      .put(`http://localhost:5000/api/employee/${id}`, {
        empID,
        fullName,
        address,
        nic,
        phoneNo,
        dob,
        recruitDate,
        type,
      })
      .then((response) => {
        console.log(response);
        const {
          empID,
          fullName,
          address,
          nic,
          phoneNo,
          dob,
          recruitDate,
          type,
        } = response.data;

        setState({
          ...state,
          empID,
          fullName,
          address,
          nic,
          phoneNo,
          dob,
          recruitDate,
          type,
        });

        Swal.fire(`Submission Updated`, "Click Ok to continue", "success");
        //  setTimeout(() => {
        //    window.location.href = "http://127.0.0.1:5173/list";
        //  }, 1000);
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
    <div>
      <Header />
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
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
                          //id="floatingInput"
                          name="empID"
                          placeholder="emp1012"
                          onChange={handleChange.bind("empID")}
                          value={state.empID}
                        />
                        <label>Employee ID</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={"form-control "}
                          //id="floatingInput"
                          name="fullName"
                          //pattern="[A-Za-z]+"
                          //title="Characters can only be A-Z and a-z."
                          placeholder="employee name"
                          onChange={handleChange.bind("fullName")}
                          value={state.fullName}
                        />
                        <label>Employee Full Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={"form-control "}
                          //id="floatingInput"
                          name="address"
                          placeholder="address"
                          pattern="[A-Za-z]+"
                          title="Characters can only be A-Z and a-z."
                          onChange={handleChange.bind("address")}
                          value={state.address}
                        />
                        <label>Address</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className={"form-control "}
                          // id="floatingInput"
                          name="phoneNo"
                          placeholder="071xxxxxxxx"
                          onChange={handleChange.bind("phoneNo")}
                          value={state.phoneNo}
                        />
                        <label>Phone Number</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={"form-control "}
                          // id="floatingPassword"
                          name="dob"
                          placeholder="dob"
                          onChange={handleChange.bind("dob")}
                          value={state.dob}
                        />
                        <label>Date Of Birth</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={"form-control "}
                          // id="floatingPassword"
                          name="recruiteDate"
                          placeholder="recruiteDate"
                          onChange={handleChange.bind("recruitDate")}
                          value={state.recruitDate}
                        />
                        <label>Recruite Date</label>
                      </div>
                      <Form.Select
                        aria-label="Default select example"
                        type="text"
                        required
                        value={state.type}
                        onChange={(event) => {
                          handleChange.bind(event.target.value);
                        }}>
                        <option>Employee Type</option>
                        <option value="BabySitter">BabySitter</option>
                        <option value="Clerk">Clerk</option>
                        <option value="Manager">Manager</option>
                      </Form.Select>
                      <br />
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
export default App;
