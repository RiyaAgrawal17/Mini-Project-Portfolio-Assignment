import React from "react";
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
              <img className="photo" alt="html" src={html}></img>
              <img
                className="photo"
                alt="css"
                src={css}
                style={{ marginTop: "5px" }}
              ></img>
              <img
                className="photo"
                alt="js"
                src={js}
                style={{ marginTop: "5px" }}
              ></img>
            </div>
            <div className="column">
              <img className="photo" alt="mongodb" src={mongoDB}></img>
              <img
                className="photo"
                alt="nodejs"
                src={nodejs}
                style={{ marginTop: "5px" }}
              ></img>
              <img
                className="photo"
                alt="reactjs"
                src={reactjs}
                style={{ marginTop: "5px" }}
              ></img>
            </div>
            <div className="column">
              <img className="photo" alt="cpp" src={cpp}></img>
              <img
                className="photo"
                alt="python"
                src={python}
                style={{ marginTop: "5px" }}
              ></img>
              <img
                className="photo"
                alt="msql"
                src={mysql}
                style={{ marginTop: "5px" }}
              ></img>
            </div>
          </div>
          </div>
    </main>
  );
}

export default Skills;