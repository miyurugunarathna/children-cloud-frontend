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
  const [selectedChild1, setSelectedChild1] = useState(null);
  const [selectedChild2, setSelectedChild2] = useState(null);
  const [selectedChild3, setSelectedChild3] = useState(null);

  const handleInputChange = (value) => {
    setValue(value);
  };
  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const handleChange2 = (value) => {
    setSelectedChild1(value);
  };
  const handleChange3 = (value) => {
    setSelectedChild2(value);
  };
  const handleChange4 = (value) => {
    setSelectedChild3(value);
  };

  const fetchData = () => {
    return axios.get("http://localhost:5000/api/employee/").then((result) => {
      const res = result.data.data;
      return res;
    });
  };

  const fetchChildren = () => {
    return axios.get("http://localhost:5000/api/child/all").then((result) => {
      const res = result.data.data;
      return res;
    });
  };

  return (
    <div className="App">
      <Header />
      <Card
        style={{ width: "100%", height: "4rem" }}
        className="card text-white bg-success mb-2">
        <Card.Body>
          <h4>Child Allocation</h4>
        </Card.Body>
      </Card>
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-lg-1 mx-auto">
                    <br />
                    <Card
                      style={{ width: "50rem" }}
                      className="card bg-secondary mb-3">
                      <Card.Body>
                        <form>
                          <Form.Label className="mb-2">
                            Select BabySitter
                          </Form.Label>
                          <div className="form-floating mb-2">
                            <AsyncSelect
                              aria-label="Default select example"
                              type="text"
                              required
                              cacheOptions
                              defaultOptions
                              value={selectedValue}
                              getOptionLabel={(e) =>
                                e.empID + " -" + e.fullName
                              }
                              getOptionValue={(e) => e.id}
                              loadOptions={fetchData}
                              onInputChange={handleInputChange}
                              onChange={handleChange}
                            />
                          </div>

                          <Form.Label className="mb-2">
                            Select Child 1
                          </Form.Label>
                          <div className="form-floating mb-2">
                            <AsyncSelect
                              aria-label="Default select example"
                              type="text"
                              required
                              cacheOptions
                              defaultOptions
                              value={selectedChild1}
                              getOptionLabel={(e) => e.parentID + " -" + e.name}
                              getOptionValue={(e) => e.id}
                              loadOptions={fetchChildren}
                              onInputChange={handleInputChange}
                              onChange={handleChange2}
                            />
                          </div>

                          <Form.Label className="mb-3">
                            Select Child 2
                          </Form.Label>
                          <div className="form-floating mb-2">
                            <AsyncSelect
                              aria-label="Default select example"
                              type="text"
                              required
                              cacheOptions
                              defaultOptions
                              value={selectedChild2}
                              getOptionLabel={(e) => e.parentID + " -" + e.name}
                              getOptionValue={(e) => e.id}
                              loadOptions={fetchChildren}
                              onInputChange={handleInputChange}
                              onChange={handleChange3}
                            />
                          </div>

                          <Form.Label className="mb-3">
                            Select Child 3
                          </Form.Label>
                          <div className="form-floating mb-2">
                            <AsyncSelect
                              aria-label="Default select example"
                              type="text"
                              required
                              cacheOptions
                              defaultOptions
                              value={selectedChild3}
                              getOptionLabel={(e) => e.parentID + " -" + e.name}
                              getOptionValue={(e) => e.id}
                              loadOptions={fetchChildren}
                              onInputChange={handleInputChange}
                              onChange={handleChange4}
                            />
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
                          <th>Child 01</th>
                          <th>Child 02</th>
                          <th>Child 03</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{}</td>
                          <td>{}</td>
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
