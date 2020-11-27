import React from "react";
import btech from "./img/btech.jpg";
import twel from "./img/12th.jpg";
import ten from "./img/10th.jpg";
import smb from "./img/smb.png";
import pineapple from "./img/pineapple.jpg";
function About(props) {
  return (
    <main>
      <div className="intro">
        <center>
          <p style={{fontSize: "18px"}}>
            I am a final year undergraduate student from Information Technology
            department of Muzaffarpur Institute of Technology.Basically I have
            interest in the field of Full Stack Development. But I have some
            knowledge related to machine learning concepts also. Generally, I
            work on web projects using MERN stack but I have done few projects
            using PHP and MySQL also. I am interested in competitive programming
            also.
          </p>
        </center>
      </div>
      <div className="education">
        <h1>EDUCATION</h1>
        <div className="row">
          <div className="column">
            <center>
              <img className="photo" alt="btech" src={btech}></img>
            </center>
            <br />
            <center>
              <h4 style={{ fontSize: "20px" }}>
                Muzaffarpur Institute of Technology, Muzaffarpur
              </h4>
            </center>
            <center>
              <h5 style={{ fontSize: "20px" }}>2017-2021</h5>
            </center>
          </div>
          <div className="column">
            <center>
              <img className="photo" alt="12" src={twel}></img>
            </center>
            <br />
            <center>
              <h4 style={{ fontSize: "20px" }}>
                Ashok Hall Girls' Hr Sec School, Kolkata
              </h4>
            </center>
            <center>
              <h5 style={{ fontSize: "20px" }}>2014-2015</h5>
            </center>
          </div>
          <div className="column">
            <center>
              <img className="photo" alt="ten" src={ten}></img>
            </center>
            <br />
            <center>
              <h4 style={{ fontSize: "20px" }}>
                Sr.Sec.Delhi Public School, Saharsa
              </h4>
            </center>
            <center>
              <h5 style={{ fontSize: "20px" }}>2012-2013</h5>
            </center>
          </div>
        </div>
      </div>

      <div className="work">
        <h1>WORK EXPERIENCE</h1>
        <div className="row">
          <div className="column">
            <center>
              <img className="photo" alt="smb" src={smb}></img>
            </center>
            <br />
            <center>
              <h4 style={{ fontSize: "20px" }}>Machine Learning Intern</h4>
            </center>
            <center>
              <h5 style={{ fontSize: "20px" }}>June,2020 - July,2020</h5>
            </center>
          </div>
          <div className="column"></div>
          <div className="column">
            <center>
              <img className="photo" alt="pine" src={pineapple}></img>
            </center>
            <br />
            <center>
              <h4 style={{ fontSize: "20px" }}>Software Intern</h4>
            </center>
            <center>
              <h5 style={{ fontSize: "20px" }}>October,2020 - Present</h5>
            </center>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
