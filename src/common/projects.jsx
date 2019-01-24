import React, { Component } from "react";
import Project from "./project";

class Projects extends Component {
  state = {
    portfolio: {
      titles: [
        "Vidly",
        "Flix & Chill",
        "Career Hunter",
        "Book list",
        "Dice Game",
        "Palindrome Checker",
        "Word Beater",
        "Snkr Api"
      ],
      github: [
        "https://github.com/Nwillia3/vidly",
        "https://github.com/Nwillia3/Flix-Chill",
        "https://github.com/Nwillia3/careerhunter",
        "https://github.com/Nwillia3/BookList2019",
        "https://github.com/Nwillia3/diceGame",
        "https://github.com/Nwillia3/PalindromeChecker",
        "https://github.com/Nwillia3/wordbeater",
        "https://github.com/Nwillia3/apiSnkr"
      ],
      imageUrl: "https://picsum.photos/200/?random"
    }
  };

  renderUrl = url => {
    return this.state.portfolio.github[url];
  };
  render() {
    const { titles, imageUrl, github } = this.state.portfolio;
    return (
      <div className="container">
        <div className="row">
          {titles.map(pro => (
            <div className="col-md-4 col-sm-12">
              <Project
                header={pro}
                image={imageUrl}
                github={this.renderUrl(titles.indexOf(pro))}
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;

// <div className="col-md-4 col-sm-12">
//             <Project
//               header="this is a prop"
//               image="https://picsum.photos/200/?random"
//             />
//           </div>
//           <div className="col-md-4 col-sm-12">
//             <Project
//               header="this is a prop"
//               image="https://picsum.photos/200/?random"
//             />
//           </div>
//           <div className="col-md-4 col-sm-12">
//             <Project
//               header="this is a prop"
//               image="https://picsum.photos/200/?random"
//             />
//           </div>
//           <div className="col-md-4 col-sm-12">
//             <Project
//               header="this is a prop"
//               image="https://picsum.photos/200/?random"
//             />
//           </div>
//           <div className="col-md-4 col-sm-12">
//             <Project
//               header="this is a prop"
//               image="https://picsum.photos/200/?random"
//             />
//           </div>
//           <div className="col-md-4 col-sm-12">
//             <Project
//               header="this is a prop"
//               image="https://picsum.photos/200/?random"
//             />
//           </div>
//           <div className="col-md-4 col-sm-12">
//             <Project
//               header="this is a prop"
//               image="https://picsum.photos/200/?random"
//             />
//           </div>
