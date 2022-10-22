import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Card from "react-bootstrap/Card";

const Bill = () => {
  const [bill, setBill] = useState([]);
  const [billItem, setBillItem] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [billName, setBillName] = useState("");
  const [item, setItem] = useState([]);
  const [totalBill, setTotalBill] = useState("");
  const [childIdNow, setChildIdNow] = useState("");
  const [currentBillItem, setCurrentBillItem] = useState([]);

  const [state, setState] = useState({
    itemName: "",
    childId: "",
    quantity: "",
    unitPrice: "",
    status: "",
  });

  //destructure values from state
  const { itemName, childId, quantity, unitPrice, status } = state;

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  const fetchBill = () => {
    axios
      .get(`http://localhost:5000/api/bill/`)
      .then((response) => {
        if (response) {
          setBill(response.data.data);
          console.log(response);
        } else if (response == []) {
          console.log(response);
          console.log("NULL RESULT");
        }
      })
      .catch((error) => console.log(error));
  };

  const billMap = (response) => {
    console.log("BILL MAP EXECUTE");
    let total = 0;
    response.map((billItem, i) => {
      let key = i;
      console.log("KEY: " + key);
      console.log(billItem.childId);
      item.push(billItem._id);
      total += billItem.unitPrice * billItem.quantity;
    });
    setTotalBill(total);
    setBillName(childId + new Date());
  };

  const fetchBillItem = () => {
    console.log("fetchBillItem EXECUTE");
    axios
      .get(`http://localhost:5000/api/item/child/${childId}`)
      .then((response) => {
        setChildIdNow(childId);
        setBillItem(response.data.data);
        console.log("BILL ITEMS" + billItem);
        Swal.fire(`Bill Generated!`, "Click Ok to continue", "success");
        billMap(response.data.data);
        setCurrentBillItem(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Add this Bill?",
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
          .post(`http://localhost:5000/api/bill/add`, {
            billName,
            childId,
            item,
            totalBill,
            status: false,
          })
          .then((response) => {
            console.log(response);
            Swal.fire(`Bill Added!`, "Click Ok to continue", "success");
            fetchBill();
            // empty state
            setState({
              ...state,
              billName: "",
              childId: "",
              item: [],
              totalBill: "",
              status: false,
            });
          })
          .catch((error) => {
            console.log(error.Response);
            Swal.fire({
              icon: "error",
              title: `Please check again!`,
              footer: "Please try again",
            });
          });
      }
    });
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    setWordEntered(searchWord);
    axios
      .get(`http://localhost:5000/api/bill/`)
      .then((response) => {
        console.log(response);
        const newFilter = billItem.filter((response) => {
          return (
            response.itemName
              .toLowerCase()
              .includes(searchWord.toLowerCase()) ||
            response.childId.toLowerCase().includes(searchWord.toLowerCase()) ||
            response.totalBill.toString().includes(searchWord.toLowerCase()) ||
            response.status.toString().includes(searchWord.toLowerCase())
          );
        });

        if (searchWord === "") {
          console.log("EMPLTY");
          fetchItems();
        } else {
          setBillItem(newFilter);
        }
      })
      .catch((error) => console.log(error));
  };

  const deleteBill = (billId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this Bill?",
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
          .delete(`http://localhost:5000/api/bill/${billId}`)
          .then((response) => {
            Swal.fire(`Bill is Deleted`, "success");
            fetchBill();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  useEffect(() => {
    fetchBill();
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
              <h1>Generate Bills</h1>
              <br />
            </center>
          </Card.Body>
        </Card>
        <br />
        <div>
          <a href="/bill">
            <button
              style={{ borderRadius: "25px", width: "100%" }}
              className="btn btn-primary btn-block">
              {" "}
              Add Bill Items{" "}
            </button>
          </a>
        </div>
        <br />
        <br />
        <div className="row">
          <div class="col">
            <div>
              <center>
                <h3>Current Bills</h3>
                <br />
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
                      <th>Child Id</th>
                      <th>Total Price (Rs.)</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bill.map((bill, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>

                        <td>{bill.childId}</td>
                        <td>{bill.totalBill}</td>
                        <td>{bill.status.toString()}</td>

                        <td>
                          &nbsp;&nbsp;&nbsp;
                          <a
                            className=""
                            href="#"
                            onClick={() => deleteBill(bill._id)}>
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

          <div class="col">
            <center>
              <h3>Bills</h3>
              <br />
              <form onSubmit={fetchBillItem}>
                <div>
                  <div className="form-billItem">
                    <input
                      onChange={handleChange("childId")}
                      value={childId}
                      type="text"
                      className="form-control"
                      placeholder="Enter Child ID"
                      required
                    />
                  </div>
                  <br />
                  <div>
                    <button className="btn btn-primary btn-block">
                      Create Bill
                    </button>
                  </div>

                  <br />
                  <br />

                  {totalBill ? (
                    <div>
                      <h4>
                        <label className="text-muted">
                          Child ID: {childIdNow}
                        </label>
                        <br /> <br />
                        <label className="text-muted">
                          Total Bill: Rs. {totalBill}
                        </label>
                      </h4>
                      <table
                        id="table"
                        class="table"
                        responsive
                        className="table table-hover"
                        style={{ marginTop: "40px", marginLeft: "20px" }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Total Price (Rs.)</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentBillItem.map((currentBillItem, i) => (
                            <tr key={i}>
                              <th scope="row">{i + 1}</th>

                              <td>{currentBillItem.itemName}</td>
                              <td>{currentBillItem.quantity.toString()}</td>
                              <td>{currentBillItem.unitPrice.toString()}</td>
                              <td>
                                {(
                                  currentBillItem.unitPrice *
                                  currentBillItem.quantity
                                ).toString()}
                              </td>
                              <td>
                                &nbsp;&nbsp;&nbsp;
                                <a
                                  className=""
                                  href="#"
                                  onClick={() => deleteBill(bill._id)}>
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
                  ) : (
                    <h4>Please Proceed!</h4>
                  )}
                </div>
              </form>
              <br />
              {totalBill ? (
                <button
                  onClick={() => handleSubmit()}
                  className="btn btn-primary btn-block">
                  Save the Bill
                </button>
              ) : (
                <h4></h4>
              )}
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
