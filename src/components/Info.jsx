import React from "react";
import profile_pic from "../assets/profile.jpg";

const Info = () => {
  return(
    <div className="info">
      <img src={profile_pic} alt="profile-pic" />
      <h1>Alejandro Salas</h1>
    </div>
  )
}

export default Info;