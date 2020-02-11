import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="nav">
      <ul>
       <li><a href="">HOME</a></li> 
        <li><a href="">ABOUT</a></li>
        <li><a href="">SERVICES</a></li>
        <li className="sam"><a href="">SAMEER</a></li>
        <li><a href="">PHTOGRAPHY</a> </li>
        <li><a href="">BLOG</a> </li>
        <li><a href="">CONTACT</a> </li>
        {/* <li><img className="logoo" src={logo} alt="Logo"/></li>              */}
      </ul>
    </div>
  );
};

export default Header;
