import React, { Component } from "react";
import web1 from "../../assests/w4.jpg";
import web2 from "../../assests/w5.png";
import web3 from "../../assests/w6.jpg";
import "./web.scss";
import Webitem from "./webitem";

class Web extends Component {
  constructor(props) {
    super(props);

    this.state = {
      webarr: [
        {
          img: web1
        },
        {
          img: web2
        },
        {
          img: web3
        },
        {
          img: web1
        },
        {
          img: web1
        }
      ]
    };
  }

  render() {
    return (
      <div className='webmain'>
        {this.state.webarr.map(x => (
          <Webitem className='hell' image={x.img} />
        ))}
        {/* <div className="webimg" style={{ background: `url(${web1})` }} /> */}
      </div>
    );
  }
}

export default Web;
