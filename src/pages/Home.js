import React, { Component } from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Principles from "../components/Principles";
import Projects from "../common/projects";
import More from "../components/More";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Projects />
        <Principles />
        <More />
      </React.Fragment>
    );
  }
}

export default Home;
