import "./css/App.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Project from "./Components/Project";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Skills />
      <Project />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
