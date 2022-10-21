import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Card from "react-bootstrap/Card";

const BillItem = () => {
  const [salaryGroup, setSalaryGroup] = useState([{}]);
  const [wordEntered, setWordEntered] = useState("");

  const [state, setState] = useState({
    groupName: "",
    salaryRate: "",
    staffId: "",
    status: "",
  });

  //destructure values from state
  const { groupName, salaryRate, staffId, status } = state;

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  const fetchSalaryGroup = () => {
    axios
      .get(`http://localhost:5000/api/salaryGroup/`)
      .then((response) => {
        console.log(response.data.data);
        setSalaryGroup(response.data.data);
        console.log(billItem);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({
      groupName,
      salaryRate,
      staffId,
      status,
    });

    console.log("ItemName: " + itemName);

    axios
      .post(`http://localhost:5000/api/salaryGroup/add`, {
        groupName,
        salaryRate,
        staffId,
        status,
      })
      .then((response) => {
        console.log("GroupName: " + groupName);
        console.log(response);
        Swal.fire(
          `Item ${groupName} is Created`,
          "Click Ok to continue",
          "success",
        );

        // empty state
        setState({
          ...state,
          groupName: "",
          salaryRate: "",
          staffId: "",
          status: "",
        });

        fetchSalaryGroup();
      })
      .catch((error) => {
        console.log(error.Response);
        Swal.fire({
          icon: "error",
          title: `Please check again!`,
          footer: "Please try again",
        });
      });
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    setWordEntered(searchWord);
    axios
      .get(`http://localhost:5000/api/salaryGroup/`)
      .then((response) => {
        console.log(response);
        const newFilter = salaryGroup.filter((response) => {
          return (
            response.groupName
              .toLowerCase()
              .includes(searchWord.toLowerCase()) ||
            response.salaryRate
              .toLowerCase()
              .includes(searchWord.toLowerCase()) ||
            response.staffId.toString().includes(searchWord.toLowerCase()) ||
            response.status.toString().includes(searchWord.toLowerCase())
          );
        });

        if (searchWord === "") {
          console.log("EMPLTY");
          fetchSalaryGroup();
        } else {
          setBillItem(newFilter);
        }
      })
      .catch((error) => console.log(error));
  };

  const deleteSalaryGroup = (salaryGroupId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this Bill Item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log("FIRED");
      if (result.isConfirmed) {
        console.log("CONFIRMED");
        axios
          .delete(`http://localhost:5000/api/salaryGroup/${salaryGroupId}`)
          .then((response) => {
            Swal.fire(`Salary Group is Deleted`, "success");
            fetchSalaryGroup();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  useEffect(() => {
    fetchSalaryGroup();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <br />
        <Card
          style={{ width: "100%", height: "5rem" }}
          className="card text-white bg-success mb-2">
          <Card.Body>
            <center>
              <h1>Salary Groups</h1>
              <br />
            </center>
          </Card.Body>
        </Card>
        <br />

        <div className="row">
          <div class="col">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="form-billItem">
                  <label className="text-muted">Salary Group Name</label>
                  <input
                    onChange={handleChange("groupName")}
                    value={groupName}
                    type="text"
                    className="form-control"
                    placeholder="Enter Group Name"
                    required
                  />
                </div>

                <br />

                <div className="form-billItem">
                  <label className="text-muted">Salary Rate (Rs.)</label>
                  <input
                    onChange={handleChange("salaryRate")}
                    value={salaryRate}
                    type="text"
                    className="form-control"
                    placeholder="Enter Salary Rate (Rs.) "
                    required
                  />
                </div>

                <br />
                <br />

                <div className="form-billItem">
                  <label className="text-muted">Staff Member</label>
                  <select
                    class="select"
                    multiple
                    data-mdb-placeholder="Staff Member Id">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                  </select>
                </div>

                <br />

                <div className="form-billItem">
                  <label className="text-muted">Status</label>
                  <select
                    id="studentType"
                    value={status}
                    onChange={handleChange("status")}
                    className="form-control"
                    required>
                    <option value="null" selected>
                      Select an Option
                    </option>
                    <option value="false">Inactive</option>
                    <option value="true">Active</option>
                  </select>
                </div>

                <br />
                <div>
                  <button className="btn btn-primary btn-lg btn-block">
                    Add Salary Group
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col">
            <div>
              <center>
                <form style={{ width: "100%" }}>
                  <div className="row">
                    <div className="col" style={{ width: "100%" }}>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        value={wordEntered}
                        onChange={handleFilter}
                      />
                    </div>
                    <div className="col" style={{ width: "70%" }}>
                      <ReactHTMLTableToExcel
                        className="btn btn-outline-success"
                        table="table"
                        filename="Students Excel"
                        sheet="Sheet"
                        buttonText="Download Excel Sheet"
                      />
                    </div>
                  </div>
                  <br />
                </form>
              </center>
            </div>
            <div>
              <div
                className="scrollable-div"
                style={{ marginLeft: "10px", width: "95%" }}>
                <table
                  id="table"
                  class="table"
                  responsive
                  className="table table-hover"
                  style={{ marginTop: "40px", marginLeft: "20px" }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Group Name</th>
                      <th>Salary Rate</th>
                      <th>Statue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryGroup.map((salaryGroup, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>

                        <td>{salaryGroup.groupName}</td>
                        <td>{salaryGroup.salaryRate}</td>
                        <td>{salaryGroup.status}</td>

                        <td>
                          <a
                            className=""
                            href={`/bill-item-update/${salaryGroup._id}`}>
                            <button style={{ borderRadius: "25px" }}>
                              Update
                            </button>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <a
                            className=""
                            href="#"
                            onClick={() => deleteSalaryGroup(billItem._id)}>
                            <button style={{ borderRadius: "25px" }}>
                              Delete
                            </button>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillItem;
