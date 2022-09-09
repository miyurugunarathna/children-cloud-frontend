import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const BillItem = () => {
  const [billItem, setBillItem] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

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

  const fetchItems = () => {
    axios
      .get(`http://localhost:5000/api/item/`)
      .then((response) => {
        // console.log(response.data)
        setBillItem(response.data);
        console.log(billItem);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({
      itemName,
      childId,
      quantity,
      unitPrice,
      status,
    });

    console.log("ItemName: " + itemName);

    axios
      .post(`http://localhost:5000/api/item/add`, {
        itemName,
        childId,
        quantity,
        unitPrice,
        status,
      })
      .then((response) => {
        console.log("ItemName: " + itemName);
        console.log(response);
        Swal.fire(
          `Item ${itemName} is Created`,
          "Click Ok to continue",
          "success",
        );

        // empty state
        setState({
          ...state,
          itemName: "",
          childId: "",
          quantity: "",
          unitPrice: "",
          status: false,
        });

        fetchItems();
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
      .get(`http://localhost:5000/api/item/`)
      .then((response) => {
        console.log(response);
        const newFilter = billItem.filter((response) => {
          return (
            response.itemName
              .toLowerCase()
              .includes(searchWord.toLowerCase()) ||
            response.childId.toLowerCase().includes(searchWord.toLowerCase()) ||
            response.quantity.toString().includes(searchWord.toLowerCase()) ||
            response.unitPrice.toString().includes(searchWord.toLowerCase())
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

  const deleteBillItem = (billItem) => {
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
          .delete(`http://localhost:5000/api/item/${billItem}`)
          .then((response) => {
            Swal.fire(`Item is Deleted`, "success");
            fetchItems();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <br />
        <center>
          <h1>Child Cloud - Child Item Adding</h1>
          <br />
        </center>
        <br />

        <div className="row">
          <div class="col">
            <form onSubmit={handleSubmit}>
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
                  <button className="btn btn-primary btn-lg btn-block">
                    Add Item
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
                      <th>Item Name</th>
                      <th>Child Id</th>
                      <th>Unit Price (Rs.)</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billItem.map((billItem, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>

                        <td>{billItem.itemName}</td>
                        <td>{billItem.childId}</td>
                        <td>{billItem.unitPrice}</td>
                        <td>{billItem.quantity}</td>

                        <td>
                          <a
                            className=""
                            href={`/bill-item-update/${billItem._id}`}>
                            <button style={{ borderRadius: "25px" }}>
                              Update
                            </button>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <a
                            className=""
                            href="#"
                            onClick={() => deleteBillItem(billItem._id)}>
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
