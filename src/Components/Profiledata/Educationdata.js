import React from "react";
function Educationdata(props) {
  
  return (
    <div className="column">
    <center>
      <img className="photo" alt={props.alt} src={props.image}></img>
    </center>
    <br />
    <center>
      <h4 style={{ fontSize: "20px" }}>
        {props.name}
      </h4>
    </center>
    <center>
      <h5 style={{ fontSize: "20px" }}>{props.year}</h5>
    </center>
  </div>
  );
}

export default Educationdata;