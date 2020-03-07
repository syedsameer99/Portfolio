import React, { Component } from "react";
import "./desktopitem.scss";

class Desktopitem extends Component {
  render() {
    return (
      <div className="deskk">
        <img
          className="deskimg"
          style={{ background: `url(${this.props.image})` }}
        />
      </div>
    );
  }
}

export default Desktopitem;
