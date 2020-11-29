import React from "react";
import Skilldata from "./Profiledata/Skilldata";
import cpp from "./img/cpp.png";
import html from "./img/html.png";
import js from "./img/js.png";
import mongoDB from "./img/mongoDB.png";
import reactjs from "./img/reactjs.png";
import nodejs from "./img/nodejs.png";
import mysql from "./img/mysql.jpg";
import python from "./img/python.png";
import css from "./img/css.png";
function Skills(props) {
  return (
    <main>
    <div className="skill">
          <h1>SKILLS</h1>
          <div className="row">
            <div className="column">
             <Skilldata image={html} alt="html" />
             <Skilldata image={css} alt="css" />
             <Skilldata image={js} alt="js" />
            </div>
            <div className="column">
            <Skilldata image={mongoDB} alt="mongodb" />
             <Skilldata image={nodejs} alt="nodejs" />
             <Skilldata image={reactjs} alt="react" />
            </div>
            <div className="column">
            <Skilldata image={cpp} alt="cpp" />
             <Skilldata image={python} alt="python" />
             <Skilldata image={mysql} alt="mysql" />
            </div>
          </div>
          </div>
    </main>
  );
}

export default Skills;