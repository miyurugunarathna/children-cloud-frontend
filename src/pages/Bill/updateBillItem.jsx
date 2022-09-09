import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const App = (props) => {
  const { id } = useParams();
  const [billItem, setBillItem] = useState([]);

  const [state, setState] = useState({
    itemName: "",
    childId: "",
    quantity: "",
    unitPrice: "",
    status: "",
  });

  //destructure values from state
  const { itemName, childId, quantity, unitPrice, status } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({
      itemName,
      childId,
      quantity,
      unitPrice,
      status,
    });
    axios
      .put(`http://localhost:5000/api/item/${id}`, {
        itemName,
        childId,
        quantity,
        unitPrice,
        status,
      })
      .then((response) => {
        console.log(response);
        const { itemName, childId, quantity, unitPrice, status } =
          response.data;

        //empty state
        setState({
          ...state,
          itemName,
          childId,
          quantity,
          unitPrice,
          status,
        });
        //show success alert
        // alert(`Staff Member ${firstName} is Updated`);
        Swal.fire(`Bill Item is Updated`, "Click Ok to continue", "success");
      })
      .catch((error) => {
        console.log(error.Response);
        // alert(error.response.data.error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Item could not be updated!`,
          footer: "Please try again",
        });
      });
  };

  const fetchItem = () => {
    axios
      .get(`http://localhost:5000/api/item/${id}`)
      .then((response) => {
        console.log(response);
        const { itemName, childId, quantity, unitPrice, status } =
          response.data;

        setState({
          ...state,
          itemName,
          childId,
          quantity,
          unitPrice,
          status,
        });

        console.log(billItem);

        console.table({
          itemName,
          childId,
          quantity,
          unitPrice,
          status,
        });
      })
      .catch((error) => console.log(error));
  };

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card-body">
          {" "}
          <br />
          <h1 align="center">Update Bill Item</h1>
          <div className="row">
            <div class="col">
              <form onSubmit={handleSubmit}>
                <div>
                  <div>
                    <div className="form-billItem">
                      <label className="text-muted">Item Name</label>
                      <input
                        onChange={handleChange("itemName")}
                        value={itemName}
                        type="text"
                        className="form-control"
                        placeholder="Enter Item Name"
                        required
                      />
                    </div>

                    <br />

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
                      <label className="text-muted">Quantity</label>
                      <input
                        onChange={handleChange("quantity")}
                        value={quantity}
                        type="text"
                        className="form-control"
                        placeholder="Enter Quantity"
                        required
                      />
                    </div>

                    <br />

                    <div className="form-billItem">
                      <label className="text-muted">Unit Price (Rs.)</label>
                      <input
                        onChange={handleChange("unitPrice")}
                        value={unitPrice}
                        type="text"
                        className="form-control"
                        placeholder="Enter Unit Price (Rs.)"
                        required
                      />
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
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                      </select>
                    </div>

                    <br />
                    <div>
                      <button
                        style={{ borderRadius: "25px" }}
                        className="btn btn-primary btn-lg btn-block">
                        Update Item
                      </button>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a
                        href={`/bill`}
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
