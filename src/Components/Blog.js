import React from "react";
import { BlogList } from "./Profiledata";
function Blogs() {
  return (
    <main>
      <div className="blog">
        <h1>BLOGS</h1>
        <div>
        {
        BlogList.map(blog=>{
      const {link,name} = blog;
      return (
        <h2>
          <a href={link}>
            {name}
          </a>
        </h2>
       )
      })
    }
    </div>
      </div>
    </main>
  );
}

export default Blogs;
