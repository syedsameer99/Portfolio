import React, { Component } from "react";
import "./member.scss";
import mem1 from "../../assests/s1.jpg";
import mem2 from "../../assests/t1.jpg";
import Animation from "../animation/animation";

class Member extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false
    };
  }

  render() {
    return (
      <div
        className="memmain"
        onMouseEnter={() => {
          this.setState({ isHidden: true });
        }}
        onMouseLeave={() => {
          this.setState({ isHidden: false });
        }}
      >
        <div className="animate animated bounceInLeft slow">
          {this.state.isHidden && <Animation facebook={this.props.facebook} />}
        </div>
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
