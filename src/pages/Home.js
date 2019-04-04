import React, { Component } from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Principles from "../components/principles";
import About from "../components/about";
import Projects from "../common/projects";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Projects />
        <About />
        <Principles />
      </React.Fragment>
    );
  }
}

export default Home;
