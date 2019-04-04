import React, { Component } from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";
// import Bio from "../components/bio";
import ProjectTitle from "../components/project-title";
import Projects from "../common/Projects";
import Principles from "../components/Principles";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        {/* <Bio /> */}
        <ProjectTitle />
        <Projects />
        <Principles />
      </React.Fragment>
    );
  }
}

export default Home;
