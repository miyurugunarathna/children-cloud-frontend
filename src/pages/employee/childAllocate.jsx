import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import Footer from "../../components/Footer.jsx";
import Card from "react-bootstrap/Card";
import { Button, Modal, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AsyncSelect from "react-select/async";

const Child = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = (value) => {
    setValue(value);
  };
  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const fetchData = () => {
    return axios.get("http://localhost:5000/api/employee/").then((result) => {
      const res = result.data.data;
      return res;
    });
  };

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
                    <br />
                    <Card style={{ width: "50rem" }}>
                      <Card.Body>
                        <form>
                          <div className="form-floating mb-2">
                            <AsyncSelect
                              aria-label="Default select example"
                              type="text"
                              required
                              cacheOptions
                              defaultOptions
                              value={selectedValue}
                              getOptionLabel={(e) =>
                                e.fullName + " -" + e.empID
                              }
                              getOptionValue={(e) => e.id}
                              loadOptions={fetchData}
                              onInputChange={handleInputChange}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-floating mb-2">
                            <Form.Select
                              aria-label="Default select example"
                              type="text"
                              required
                              //   onChange={(event) => {
                              //     setType(event.target.value);
                              //   }}
                            >
                              <option>Child One</option>
                              <option value=""></option>
                            </Form.Select>
                          </div>
                          <div className="form-floating mb-2">
                            <Form.Select
                              aria-label="Default select example"
                              type="text"
                              required
                              //   onChange={(event) => {
                              //     setType(event.target.value);
                              //   }}
                            >
                              <option>Child Two</option>
                              <option value=""></option>
                            </Form.Select>
                          </div>
                          <div className="form-floating mb-2">
                            <Form.Select
                              aria-label="Default select example"
                              type="text"
                              required
                              //   onChange={(event) => {
                              //     setType(event.target.value);
                              //   }}
                            >
                              <option>Child Three</option>
                              <option value=""></option>
                            </Form.Select>
                          </div>
                          <br />
                          <div className="d-grid">
                            <button
                              className="btn btn-sm btn-primary btn-login text-uppercase fw-bold mb-5"
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
                <br />
                <div>
                  <div
                    className="scrollable-div"
                    style={{ marginLeft: "380px", width: "100%" }}>
                    <Table
                      id="table"
                      className="table"
                      striped
                      bordered
                      hover
                      variant="light">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>BabySitter ID</th>
                          <th>Child Id</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{}</td>
                          <td>{}</td>
                          <td>{}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <br />
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

export default Child;
