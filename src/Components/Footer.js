import React from "react";
import { FooterList } from "./Profiledata";
function Footer(props) {
  return (
    <footer>
      <hr />
      <center>
        {FooterList.map((data) => {
          const { link } = data;
          return (
            <h3 style={{ marginTop: "10px" }}>
              Follow me on
              <a href={link}>Twitter</a>
            </h3>
          );
        })}
      </center>
      <br />
    </footer>
  );
}

export default Footer;
