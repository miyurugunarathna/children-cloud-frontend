import React, { useState, useEffect } from "react";
import axios from "axios";

const LeadersPost = () => {
  const [BabySitter, setBabySitter] = useState("");
  const [child01, setChild01] = useState("");
  const [child02, setChild02] = useState("");
  const [chlid03, setChild03] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:5000/api/employee/",
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      BabySitter: BabySitter,
      child01: child01,
      child02: child02,
      chlid03: chlid03,
    };
    try {
      await axios
        .post("http://localhost:5000/api/babySitter/add", data)
        .then((res) => {
          setData(res.data);
          setBabySitter("");
          setChild01("");
          setChild02("");
          setChild03("");
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container mt-2">
      <h2>Leaders Post Request</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-2 mt-3">
          <select className="form-control" aria-label="Default select example">
            <option>Choose a branch</option>
            {
              <option
                onChange={(e) => {
                  setChild01(e.target.value);
                }}>
                {branch.id}
              </option>
            }
          </select>

          <select className="form-control" aria-label="Default select example">
            <option>Choose a babysitter</option>
            {
              <option
                onChange={(e) => {
                  setBabySitter(e.target.value);
                }}>
                {babysitter.id}
              </option>
            }
          </select>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadersPost;
