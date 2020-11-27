import React from "react";
import my from "./img/my.jpg";

function Profile(props) {
  return (
    <main>
      <center>
        <img className="photo" alt="my" src={my}></img>
        <h1>Riya Agrawal</h1>
        <h2>Aspiring Software Engineer | Freelancer</h2>
      </center>
    </main>
  );
}

export default Profile;
