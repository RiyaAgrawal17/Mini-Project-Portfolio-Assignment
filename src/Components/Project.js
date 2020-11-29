import React from "react";
import Projectdata from "./Profiledata/Projectdata";
function Project(props){
  return (
    <main>
    <div className="project">
    <h1>PROJECTS</h1>
    <div className="row">

      <Projectdata
       name="Realtime chat-app"
       link="https://frozen-castle-70414.herokuapp.com/" 
       description="Web application to send and receive messages from connected
       browsers to others"
       />

      <Projectdata
       name="Keeper App"
       link="https://t4pr1.csb.app/"
       description="Web application to add and delete notes."
        />

      <Projectdata
       name="Realtime comment system"
       link="https://immense-oasis-92614.herokuapp.com/"
       description="Web application to store the comments in the database."
        />
   
      <Projectdata
       name=" File sharing app"
       link="https://github.com/RiyaAgrawal17/share"
       description="Web application to share a file by uploading it and then sharing
       the link. Direct e-mail sending option is also there."
        />
      
    </div>
  </div>
  </main>
  )
};

export default Project;