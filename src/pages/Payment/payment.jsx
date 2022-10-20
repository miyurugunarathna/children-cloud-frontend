import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Card from "react-bootstrap/Card";

const Payment = () => {
  const [bill, setBill] = useState([]);
  const [payment, setPayment] = useState([]);
  const [billItem, setBillItem] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [wordEntered2, setWordEntered2] = useState("");

  const [billName, setBillName] = useState("");
  const [item, setItem] = useState([]);
  const [totalBill, setTotalBill] = useState("");

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
        setBill(response.data.data);
        console.log(bill);
      })
      .catch((error) => console.log(error));
  };

  const fetchPayment = () => {
    axios
      .get(`http://localhost:5000/api/payment/`)
      .then((response) => {
        setPayment(response.data.data);
        console.log(payment);
      })
      .catch((error) => console.log(error));
  };

  const fetchBillItem = () => {
    axios
      .get(`http://localhost:5000/api/item/child/${childId}`)
      .then((response) => {
        setBillItem(response.data);
        console.log(billItem);
        Swal.fire(`Bill Generated!`, "Click Ok to continue", "success");
        billMap(response.data);
      })
      .catch((error) => console.log(error));
  };

  const billMap = (response) => {
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

  const handlePayment = (billId, name, type, amount) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Pay this Bill?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Pay it!",
    }).then((result) => {
      console.log("FIRED");
      if (result.isConfirmed) {
        console.log("CONFIRMED");
        axios
          .post(`http://localhost:5000/api/payment/add`, {
            paymentName: name,
            paymentType: type,
            paymentAmount: amount,
            billId,
            paymentStatus: "paid",
          })
          .then((response) => {
            console.log(response);
            Swal.fire(`Payment Successful!`, "Click Ok to continue", "success");

            // empty state
            setState({
              ...state,
              paymentName: "",
              paymentType: "",
              paymentAmount: "",
              billId: "",
              paymentStatus: "",
            });

            deleteBill(billId);
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
            response.totalBill.toString().includes(searchWord.toLowerCase())
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

  const handleFilterPayment = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    setWordEntered2(searchWord);
    axios
      .get(`http://localhost:5000/api/payment/`)
      .then((response) => {
        console.log(response);
        const newFilter = payment.filter((response) => {
          return (
            response._id.toLowerCase().includes(searchWord.toLowerCase()) ||
            response.billId.toLowerCase().includes(searchWord.toLowerCase()) ||
            response.paymentAmount.toString().includes(searchWord.toLowerCase())
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
    axios
      .delete(`http://localhost:5000/api/bill/${billId}`)
      .then((response) => {
        Swal.fire(`Bill is Deleted`, "success");
        fetchBill();
      })
      .catch((error) => console.log(error));
  };

  const deletePayment = (payId) => {
    axios
      .delete(`http://localhost:5000/api/payment/${payId}`)
      .then((response) => {
        Swal.fire(`Payment is Deleted`, "success");
        fetchBill();
        fetchPayment();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchBill();
    fetchPayment();
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
              <h1>Payment</h1>
              <br />
            </center>
          </Card.Body>
        </Card>

        <br />

        <div className="row">
          <div class="col">
            <div>
              <center>
                <h3>Pending Bills</h3>
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
                            onClick={() =>
                              handlePayment(
                                bill._id,
                                bill.billName,
                                "cash",
                                bill.totalBill,
                              )
                            }>
                            <button style={{ borderRadius: "25px" }}>
                              Settle Payment
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
            <div>
              <center>
                <h3>Payment History</h3>
                <br />
                <form style={{ width: "100%" }}>
                  <div className="row">
                    <div className="col" style={{ width: "100%" }}>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        value={wordEntered2}
                        onChange={handleFilterPayment}
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
                      <th>Payment ID</th>
                      <th>Total(Rs.)</th>
                      <th>Bill ID</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payment.map((payment, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>

                        <td>{payment._id}</td>
                        <td>{payment.paymentAmount}</td>
                        <td>{payment.billId}</td>
                        <td>{payment.paymentStatus}</td>

                        <td>
                          &nbsp;&nbsp;&nbsp;
                          <a
                            className=""
                            href="#"
                            onClick={() => deletePayment(payment._id)}>
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

export default Payment;
