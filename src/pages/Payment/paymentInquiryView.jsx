import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Card from "react-bootstrap/Card";

const PaymentInqView = () => {
  const [inquiry, setInq] = useState([]);
  const [payment, setPayment] = useState([]);
  const [billItem, setBillItem] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [wordEntered2, setWordEntered2] = useState("");

  const [billName, setBillName] = useState("");
  const [item, setItem] = useState([]);
  const [totalBill, setTotalBill] = useState("");

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  const fetchInquiry = () => {
    axios
      .get(`http://localhost:5000/api/paymentInq/`)
      .then((response) => {
        setInq(response.data.data);
        console.log(inquiry);
      })
      .catch((error) => console.log(error));
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
      .get(`http://localhost:5000/api/paymentInq/`)
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
      .get(`http://localhost:5000/api/paymentInq/`)
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

  const deleteInq = (billId) => {
    axios
      .delete(`http://localhost:5000/api/paymentInq/delete/${inqId}`)
      .then((response) => {
        Swal.fire(`Inquiry is Deleted`, "success");
        fetchInquiry();
      })
      .catch((error) => console.log(error));
  };

  const markResolved = (inqId) => {
    axios
      .delete(`http://localhost:5000/api/paymentInq/${inqId}`)
      .then((response) => {
        Swal.fire(`Marked as Resolved`, "success");
        fetchInquiry();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchInquiry();
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
              <h1>Inquiry</h1>
              <br />
            </center>
          </Card.Body>
        </Card>

        <br />

        <div className="row">
          <div class="col">
            <div>
              <center>
                <h3>Pending Inquiry</h3>
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
                      <th>Payment Id</th>
                      <th>Bill Id</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiry.map((inquiry, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>

                        <td>{inquiry.childId}</td>
                        <td>{inquiry.paymentId}</td>
                        <td>{inquiry.billId}</td>
                        <td>{inquiry.type}</td>

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
                              Resolved
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

export default PaymentInqView;
