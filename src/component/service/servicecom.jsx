import React, { Component } from "react";
import "./servicecom.scss";

class Servicecom extends Component {
  render() {
    return (
      <div className="sercommain">
        <img className="imgg" src={this.props.image} />
        <div className="head">
          <h2>{this.props.head}</h2>
        </div>
        <div className="sub">
          <span>{this.props.sub}</span>
        </div>
      </div>
    );
  }
}

export default Servicecom;
