import React from "react";
import DeleteEvent from "../../components/model/Event/DeleteEvent";
import EditEvent from "../../components/model/Event/EditEvent";

const SingleEvent = ({ eve, evid, setEvID }) => {
  return (
    <div
      class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl"
      style={{ marginLeft: "250px" }}>
      <p style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "400px" }}>
        {" "}
        {eve.title}
      </p>
      <br />

      <div style={{ display: "flex" }}>
        <div>
          <p>{eve.date}</p>
          <br />
          <p>
            {eve.startTime} - {eve.endTime}
          </p>
          <br />
          <p>{eve.tag}</p>
          <br />
        </div>
        <div
          style={{
            borderLeft: "6px solid black",
            height: "200px",
            marginLeft: "50px",
          }}></div>
        <div>
          <img
            alt="Card image cap"
            src={eve.image}
            style={{
              maxHeight: "150px",
              maxWidth: "150px",
              marginRight: "20px",
              marginLeft: "50px",
            }}
          />
        </div>
        <div>
          <p>About Birth Day</p>
        </div>
      </div>

      <div
        class="flex item-center justify-center"
        style={{ marginLeft: "1200px" }}>
        <EditEvent eve={eve} evid={evid} setEvID={setEvID} />
        <DeleteEvent eve={eve} evid={evid} setEvID={setEvID} />
      </div>
    </div>
  );
};

export default SingleEvent;
