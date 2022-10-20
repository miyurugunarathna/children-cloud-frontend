import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const App = (props) => {
  const { id } = useParams();

  const [state, setState] = useState({
    childId: "",
    billId: "",
    paymentId: "",
    type: "",
    contactNumber: "",
    emailAddress: "",
    description: "",
  });

  //destructure values from state
  const {
    childId,
    billId,
    paymentId,
    contactNumber,
    type,
    emailAddress,
    description,
  } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({
      childId,
      billId,
      paymentId,
      type,
      contactNumber,
      emailAddress,
      description,
    });
    axios
      .post(`http://localhost:5000/api/paymentInq/add`, {
        childId,
        billId,
        paymentId,
        type,
        contactNumber,
        emailAddress,
        description,
      })
      .then((response) => {
        console.log(response);
        const {
          childId,
          billId,
          paymentId,
          type,
          contactNumber,
          emailAddress,
          description,
        } = response.data.data;

        //empty state
        setState({
          ...state,
          childId,
          billId,
          paymentId,
          type,
          contactNumber,
          emailAddress,
          description,
        });
        //show success alert
        Swal.fire(
          `Payment Inquiry is Sent!`,
          "Click Ok to continue",
          "success",
        );
      })
      .catch((error) => {
        console.log(error.Response);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Item could not send the Inquiry!`,
          footer: "Please try again",
        });
      });
  };

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card-body">
          {" "}
          <br />
          <h1 align="center">Send Payment Inquiry</h1>
          <br/>
          <div className="row">
            <div class="col">
              <form onSubmit={handleSubmit} style={{ width: "75%", marginLeft: "15%" }}>
                <div>
                  <div>
                    <div className="form-billItem">
                      <label className="text-muted">Child Id</label>
                      <input
                        onChange={handleChange("childId")}
                        value={childId}
                        type="text"
                        className="form-control"
                        placeholder="Enter Child Id"
                        required
                      />
                    </div>

                    <br />

                    <div className="form-billItem">
                      <label className="text-muted">Bill Id</label>
                      <input
                        onChange={handleChange("billId")}
                        value={billId}
                        type="text"
                        className="form-control"
                        placeholder="Enter Bill Id"
                        required
                      />
                    </div>

                    <br />

                    <div className="form-billItem">
                      <label className="text-muted">Payment Id</label>
                      <input
                        onChange={handleChange("paymentId")}
                        value={paymentId}
                        type="text"
                        className="form-control"
                        placeholder="Enter Payment Id"
                        required
                      />
                    </div>

                    <br />
                    <div className="form-billItem">
                      <label className="text-muted">Type</label>
                      <select
                        id="studentType"
                        value={type}
                        onChange={handleChange("type")}
                        className="form-control"
                        required>
                        <option value="null" selected>
                          Select an Option
                        </option>
                        <option value="false">Payment Issue</option>
                        <option value="true">Bill Issue</option>
                        <option value="true">Other</option>
                      </select>
                    </div>
                    <br />

                    <div className="form-billItem">
                      <label className="text-muted">Contact Number</label>
                      <input
                        onChange={handleChange("contactNumber")}
                        value={contactNumber}
                        type="text"
                        className="form-control"
                        placeholder="Enter Contact Number"
                        required
                      />
                    </div>

                    <br />

                    <div className="form-billItem">
                      <label className="text-muted">Email Address</label>
                      <input
                        onChange={handleChange("emailAddress")}
                        value={emailAddress}
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                        required
                      />
                    </div>

                    <br />

                    <div className="form-billItem">
                      <label className="text-muted">Description</label>
                      <input
                        onChange={handleChange("description")}
                        value={description}
                        type="text"
                        className="form-control"
                        placeholder="Enter Description"
                        required
                      />
                    </div>

                    <br />

                    <br />
                    <div>
                      <button
                        style={{ borderRadius: "25px" }}
                        className="btn btn-primary btn-lg btn-block">
                        Send Inquiry
                      </button>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a
                        href={`/kidos`}
                        style={{
                          backgroundColor: "#f44336",
                          borderRadius: "25px",
                          color: "white",
                          padding: "14px 25px",
                          textAlign: "center",
                          textDecoration: "none",
                          display: "inline-block",
                        }}>
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <div>
                {" "}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
