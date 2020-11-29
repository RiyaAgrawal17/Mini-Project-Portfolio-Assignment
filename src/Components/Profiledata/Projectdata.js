import React from "react";
function Projectdata(props) {
  
  return (
    <div className="column">
      <h3>{props.name}
        <a href={props.link}>(Check here)</a>
      </h3>
      <p>{props.description}</p>
      <br />
    </div>
  );
}

export default Projectdata;
