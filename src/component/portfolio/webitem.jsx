import React, { Component } from "react";
import './webitem.scss'

class Webitem extends Component {
  render() {
    return (
      <div className='webb'>
        <img className="webimg" style={{ background: `url(${this.props.image})` }} />
      </div>
    );
  }
}

export default Webitem;
