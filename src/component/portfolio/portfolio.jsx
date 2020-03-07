import React, { Component } from "react";
import "./portfolio.scss";
import Web from "./web";
import Desktop from "./desktop";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // showresultweb: true ,
        // showresultdesktop: false

      InitialWeb: function() {
        return { showresultweb: true };
      },
      InitialDesktop: function() {
        return { showresultdesktop: false };
      }
    };
   // this.Portfolio=this.Portfolio.bind(this)
  }

//   webClick=()=>{
//       this.setState(oldstate=>({s}))
//   }

  webClick = () => {
    this.setState({ showresultweb: true });
    this.setState({ showresultdesktop: false });
  };
  desktopClick = () => {
    this.setState({ showresultdesktop: true });
    this.setState({ showresultweb: false });
  };
  render() {
    return (
      <div className="portfoliomain">
        <div className="subport">
          <h1 className="p">Portfolio</h1>
          <div className="potbtn">
            <button className="web" onClick={this.webClick}>
            
              Web
            </button>
            <button className="desktop" onClick={this.desktopClick}>
            
              Desktop
            </button>
          </div>
          {this.state.showresultweb ? null : <Web />}
            {!this.state.showresultdesktop ? null : <Desktop />}
        </div>
      </div>
    );
  }
}

export default Portfolio;
