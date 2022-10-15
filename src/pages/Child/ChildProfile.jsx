import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChildStore } from "../../store/Child";
import childRequest from "../../api/Child/child.request";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SingleChild from "./SingleChild";

export const ChildProfile = () => {
  const childs = useSelector((state) => state.child);
  const [childprofile, setchilds] = useState([]);
  const [sid, setSid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChildStore());
  }, [dispatch]);

  useEffect(() => {
    childRequest.getChildsOfParent().then((res) => {
      console.log(res.data);
      setchilds(res.data);
    });
  }, []);

  useEffect(() => {
    childRequest.getChildsOfParent().then((res) => {
      console.log(res.data);
      setchilds(res.data);
      setSid(null);
    });
  }, [sid]);

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          {!childprofile.length ? (
            <div style={{ width: "1300px" }}>
              <div
                style={{
                  background: "lightblue",
                  marginLeft: "150px",
                  marginTop: "150px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}>
                <h4>No Child Added !</h4>
                <p>No Childs Were Found.</p>
              </div>
            </div>
          ) : (
            childprofile.map((chi) => (
              <div key={chi._id} className="mt-6">
                <SingleChild chi={chi} sid={sid} setSid={setSid} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
