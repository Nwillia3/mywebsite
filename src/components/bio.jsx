import React from "react";
import "./Bio.css";

const Bio = () => {
  const styling = {
    paddingBottom: 20
  };
  return (
    <div className="container" style={styling}>
      <div className="row">
        <div className="col-md-6 col-sm-12 bio-para">
          <p>
            Premium covers for MacBooks, iPhone and iPad made out of real high
            quality wood.
          </p>
        </div>
        <div className="col-md-6 col-sm-12 bio-para">
          <p>
            Premium covers for MacBooks, iPhone and iPad made out of real high
            quality wood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
