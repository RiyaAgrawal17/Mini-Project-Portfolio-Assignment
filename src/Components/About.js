import React from "react";
import Educationdata from "./Profiledata/Educationdata";
import btech from "./img/btech.jpg";
import twelve from "./img/12th.jpg";
import ten from "./img/10th.jpg";

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

          <Educationdata
          image={btech}
          alt="btech"
          name="Muzaffarpur Institute of Technology, Muzaffarpur"
          year="2017-2021"
          />

         <Educationdata
          image={twelve}
          alt="12"
          name="Ashok Hall Girls' Hr Sec School, Kolkata"
          year="2014-2015"
          />
          
          <Educationdata
          image={ten}
          alt="10"
          name="Sr.Sec.Delhi Public School, Saharsa"
          year="2012-2013"
          />
          
        </div>
      </div>
    </main>
  );
}

export default About;
