import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Header from "./components/header";
import Bio from "./components/bio";
import Projects from "./common/projects";
import ProjectTitle from "./components/project-title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Bio />
        <ProjectTitle />
        <Projects />
      </div>
    );
  }
}

export default App;
