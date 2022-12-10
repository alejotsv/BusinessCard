import React from "react";
import profile_pic from "../assets/profile.jpg";

const Info = () => {
  return(
    <div className="info">
      <div className="img-box">
        <img src={profile_pic} alt="profile-pic" height="317" />
      </div>
      <h1>Alejandro Salas</h1>
    </div>
  )
}

export default Info;