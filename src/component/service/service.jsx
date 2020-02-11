import React from "react";
import "./service.scss";
import Servicecom from "./servicecom/servicecom";
import Logo from "../../assests/logo.png";

function Service() {
  return (
    <div className='service-main'>
      <h1 className="h">Service</h1>

      <div className="content">
        <Servicecom
          heading="Wedding"
          sub="qwertyuiosdfgggggggggggggggggggggfffffffffff"
          Url={Logo}
        />
        <Servicecom
          heading="Wedding"
          sub="qwertyuiosdfgggggggggggggggggggggfffffffffff"
          Url={Logo}
        />
        <Servicecom
          heading="Wedding"
          sub="qwertyuiosdfgggggggggggggggggggggfffffffffff"
          Url={Logo}
        />
        <Servicecom
          heading="Wedding"
          sub="qwertyuiosdfgggggggggggggggggggggfffffffffff"
          Url={Logo}
        />
      </div>
    </div>
  );
}

export default Service;
