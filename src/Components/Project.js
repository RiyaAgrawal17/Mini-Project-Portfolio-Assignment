import React from "react";
import { ProjectList } from "./Profiledata";
function Project(){
  return (
    <main>
    <div className="project">
    <h1>PROJECTS</h1>
    <div className="row">
      {
    ProjectList.map(project=>{
      const {link,description,name} = project;
      return (
    <div className="column">
      <h3>{name}
        <a href={link}>(Check here)</a>
      </h3>
      <p>{description}</p>
      <br />
      </div>
      )
    })
  }
    </div>
   </div>
  </main>
)
  };

export default Project;