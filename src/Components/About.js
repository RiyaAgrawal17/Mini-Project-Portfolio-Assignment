import React from "react";
import { EducationList } from "./Profiledata";

function About(props) {
  return (
    <main>

      <div className="intro">
        
          <p style={{fontSize: "18px"}}>
            I am a final year undergraduate student from Information Technology
            department of Muzaffarpur Institute of Technology.Basically I have
            interest in the field of Full Stack Development. But I have some
            knowledge related to machine learning concepts also. Generally, I
            work on web projects using MERN stack but I have done few projects
            using PHP and MySQL also. I am interested in competitive programming
            also.
          </p>
      
      </div>
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
