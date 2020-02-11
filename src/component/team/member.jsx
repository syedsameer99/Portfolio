import React, { Component } from "react";
import "./member.scss";
import mem1 from "../../assests/s1.jpg";
import mem2 from "../../assests/t1.jpg";

class Member extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // backgroundd:mem2,
    };
  }

  render() {
    return (
      <div className="memmain">
        <div
          className="memimg"
          style={{ backgroundImage: `url(${this.props.backgroundd})` }}
        />

        <h1 className="memname">{this.props.membername}</h1>
      </div>
    );
  }
}

export default Member;
