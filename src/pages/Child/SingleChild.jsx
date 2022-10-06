import React from 'react'
import UpdateProfile from '../../components/model/child/UpdateProfile'

const SingleChild = ({chi}) => {
  return (
    <div class=' overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl'>
    
    <div style={{ display: "flex" }}>
        <div>
          <p>Name : {chi.name} </p>
          <br />
          <p>Age : {chi.age} </p>
          <br />
          <p>Gender : {chi.gender} </p>
          <br />
          <p>Date Of Birth : {chi.dateOfBirth}</p>
          <br />
          <p>School : {chi.school}</p>
          <br />
          <p>Hobby : {chi.hobby}</p>
          <br />
        </div>
        <div style={{ marginLeft: "400px" }}>
          <img
            alt="Card image cap"
            src={chi.image}
            style={{
              maxHeight: "150px",
              maxWidth: "150px",
              marginRight: "20px",
            }}
          />
        </div>
      </div>
      <UpdateProfile />
</div>
  )
}

export default SingleChild