import React, { Component } from "react";
import "./image.scss";
import back1 from "../image/img.jpg";
import back2 from "../../assests/s1.jpg";
export class Image extends Component {
  state = {
    background: back1
  };

  render() {
    setInterval(() => {
      if (this.state.background == back2) {
        this.setState({ background: back1 });
      } else {
        this.setState({ background: back2 });
      }
      
    }, 9000);
    return (
      <div>
        <div
          className="img"
          name="first"
          style={{ backgroundImage: `url(${this.state.background})` }}
        >
          <h1 className="name">I'm SAMEER SHAH</h1>
          <span className="dev">Developer | Photographer </span>
          <div className="lorem">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              ipsam? Sequi veniam neque ad quam, ducimus culpa cupiditate
              aspernatur, accusantium velit, ipsum iste. Quaerat harum
              necessitatibus dolorem veniam, ipsa temporibus!
            </p>
            <button className="btn">Contact me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
