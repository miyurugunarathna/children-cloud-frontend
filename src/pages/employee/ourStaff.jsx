import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Header from "../../components/Header.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const App = (props) => {
  const { id } = useParams();

  const [state, setState] = useState({
    empID: "",
    fullName: "",
    phoneNo: "",
    type: "",
    image: "",
  });

  const fetchEmp = () => {
    console.log("working");
    axios
      .post(`http://localhost:5000/api/employee/`)
      .then((response) => {
        setEmp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEmp();
    axios
      .get(`http://localhost:5000/api/employee/${id}`)
      .then((response) => {
        console.log("user", response);
        console.log("data", response.data);
        const { empID, fullName, phoneNo, type, image } = response.data.data;
        setState({
          ...state,
          empID,
          fullName,
          phoneNo,
          type,
          image,
        });
      })
      .catch((error) => console.log("Error loading update employee: " + error));
  }, []);

  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col sm={6}>
            <span>
              <img
                alt="Card image cap"
                src={state.image}
                style={{
                  maxHeight: "270px",
                  maxWidth: "270px",
                  marginRight: "0px",
                  marginLeft: "900px",
                  marginTop: "-500px",
                }}
              />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
