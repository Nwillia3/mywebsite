import React, { Component } from "react";
import "./App.css";
import ProjectCard from "./api/projectCard";
import NavBar from "./components/navBar";
import Header from "./components/header";
import Bio from "./components/bio";
import Projects from "./common/projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Header />
          <Bio />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
