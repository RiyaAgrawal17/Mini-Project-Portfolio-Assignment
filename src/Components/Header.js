import React from "react";

function Header(props) {
  return (
    <div className="App">
      <header>
        <nav>
          <input type="checkbox" id="check" value=""></input>
          <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <ul>
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="index.html">About Me</a>
            </li>
            <li>
              <a href="index.html">Learnings</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
