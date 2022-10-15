import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SingleEvent from "./SingleEvent";
import eventRequest from "../../api/Event/event.request";

const Events = () => {
  const [events, setevents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    eventRequest.getEvents().then((res) => {
      console.log(res.data);
      setevents(res.data);
    });
  }, []);
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <Sidebar />
        <div class="h-full  mt-14 mb-10 md:ml-64">
          {!events.length ? (
            <div style={{ width: "1300px" }}>
              <div
                style={{
                  background: "lightblue",
                  marginLeft: "150px",
                  marginTop: "150px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}>
                <h4>No Events Added !</h4>
                <p>No Events Were Found.</p>
              </div>
            </div>
          ) : (
            events.map((eve) => (
              <div key={eve._id} className="mt-6">
                <SingleEvent eve={eve} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
