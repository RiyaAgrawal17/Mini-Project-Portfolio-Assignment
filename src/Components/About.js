import React from "react";
import { EducationList } from "./Profiledata";

function About() {
  return (
    <main>
      <div className="education">
        <h1>EDUCATION</h1>
        <div className="row">
        {
    EducationList.map(education=>{
      const {alt,image,name,year} = education;
      return (
        <div className="column">
    <center>
      <img className="photo" alt={alt} src={image}></img>
    </center>
    <br />
    <center>
      <h4 style={{ fontSize: "20px" }}>
        {name}
      </h4>
    </center>
    <center>
      <h5 style={{ fontSize: "20px" }}>{year}</h5>
    </center>
  </div>
   )
  })
}
        </div>
      </div>
    </main>
  );
}

export default About;
