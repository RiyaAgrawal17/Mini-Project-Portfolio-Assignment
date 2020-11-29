import React from "react";
function Blogdata(props) {
  
  return (
    <div>
        <h2>
          <a href={props.link}>
            {props.name}
          </a>
        </h2>
    </div>
  );
}

export default Blogdata;