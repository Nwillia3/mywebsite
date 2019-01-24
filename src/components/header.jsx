import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="container bgColor">
      <div className="jumbo">
        <h2 className="header-primary">
          I like to create things... here is
          <button className="btn btn-dark btn-lg"> My CV</button>
        </h2>
      </div>
    </header>
  );
};

export default Header;
