import React from "react";
import "./servicecom.scss";

function Servicecom({ heading, sub, Url }) {
  return (
    <div className="mains">
      <div style={{ backgroundImage: `url(${Url})` }} className="image" />
      <div className="ss">
        <span className='hh'> {heading}</span>
        <span className='subb'>{sub}</span>
      </div>
    </div>
  );
}

export default Servicecom;
