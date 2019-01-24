import React from "react";

const Header = () => {
  const styling = {
    backgroundColor: "grey",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    textAlign: "center",
    position: "relative"
  };
  return (
    <header style={styling}>
      <div className="jumbotron jumbtron-fluid">
        <div className="header_text">
          <h1 className="header-primary"> I build things</h1>
          <p className="header_description">some text</p>
          <button className="btn btn-primary"> My CV</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
