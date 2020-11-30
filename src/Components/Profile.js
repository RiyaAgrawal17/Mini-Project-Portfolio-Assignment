import React from "react";
import { ProfileList } from "./Profiledata";

function Profile() {
  return (
    <main>
      <div>
        {
    ProfileList.map(data=>{
      const {alt,image,name,profile} = data;
      return (
      <center>
        <img className="photo" alt={alt} src={image}></img>
        <h1>{name}</h1>
        <h2>{profile}</h2>
      </center>
      )
    })
  }
      </div>
    </main>
  );
}

export default Profile;
