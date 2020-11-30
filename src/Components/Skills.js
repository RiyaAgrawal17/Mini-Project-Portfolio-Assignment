import React from "react";
import { SkillList } from "./Profiledata";
function Skills() {
  return (
    <main>
    <div className="skill">
          <h1>SKILLS</h1>
          <div className="row">
          {
    SkillList.map(skill=>{
      const {alt,image} = skill;
      return (
            <div className="column">
            <img className="photo" alt={alt} src={image}
               style={{ marginTop: "5px" }}
            ></img>
            </div>
             )
            })
          }
          </div>
          </div>
    </main>
  );
}

export default Skills;