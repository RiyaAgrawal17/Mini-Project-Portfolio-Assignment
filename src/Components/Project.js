import React from "react";

function Project(props){
  return (
    <main>
    <div className="project">
    <h1>PROJECTS</h1>
    <div className="row">
      
      <div className="column">
        <h3>
          Realtime chat-app
          <a href="https://frozen-castle-70414.herokuapp.com/">
            (Check here)
          </a>
        </h3>
        <p>
          Web application to send and receive messages from connected
          browsers to others.
        </p>
        <br />
      </div>

      <div className="column">
        <h3>
          Keeper App
          <a href="https://t4pr1.csb.app/">
            (Check here)
          </a>
        </h3>
        <p>Web application to add and delete notes. </p>
        <br />
      </div>
      <div className="column">
        <h3>
          Realtime comment system
          <a href="https://immense-oasis-92614.herokuapp.com/">
            (Check here)
          </a>
        </h3>
        <p>Web application to store the comments in the database. </p>
        <br />
      </div>
      <div className="column">
        <h3>
          File sharing app
          <a href="https://github.com/RiyaAgrawal17/share">
            (Check here)
          </a>
        </h3>
        <p>
          Web application to share a file by uploading it and then sharing
          the link. Direct e-mail sending option is also there.{" "}
        </p>
        <br />
      </div>
    </div>
  </div>
  </main>
  )
};

export default Project;