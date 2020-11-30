import React from "react";
import { IntroList } from "./Profiledata";


function Intro() {
  return (
    <main>
      <div className="intro">
        {
            IntroList.map(data=>{
              const {intro} = data;
              return(
 <p style={{fontSize: "18px"}}>{intro}</p> 
 )
})
}
      </div>
      </main>
  );
}

export default Intro;