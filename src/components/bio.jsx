import React, { Component } from "react";

const Bio = () => {
  const styling = {
    paddingBottom: 20
  };
  return (
    <div style={styling}>
      <div className="row">
        <div className="col-md-6 col-sm-12" style={styling}>
          <h1>
            Premium covers for MacBooks, iPhone and iPad made out of real high
            quality wood.
          </h1>
        </div>
        <div className="col-md-6 col-sm-12">
          <h1>
            Premium covers for MacBooks, iPhone and iPad made out of real high
            quality wood.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Bio;
