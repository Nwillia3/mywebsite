import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Principles from "../components/Principles";
import About from "../components/About";
import Projects from "../common/Projects";

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
