import React from "react";
import Blogdata from "./Profiledata/Blogdata";
function Blogs(props) {
  return (
    <main>
      <div className="blog">
        <h1>BLOGS</h1>
        <Blogdata
          link="https://dev.to/riyaagrawal17/back-to-start-again-2gja"
          name="* Back to start again"
          />

        <Blogdata
          link="https://dev.to/riyaagrawal17/weekly-update-of-my-learnings-400j"
          name="* Back to start again - Week 2"
          />

        <Blogdata
          link="https://dev.to/riyaagrawal17/back-to-start-again-week-3-41da"
          name="* Back to start again - Week 3"
          />
      
      </div>
    </main>
  );
}

export default Blogs;
