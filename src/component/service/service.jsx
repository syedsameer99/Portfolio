import React from "react";
import "./service.scss";
import s1 from "../../assests/ser1.jpg";
import s2 from "../../assests/ser3.png";
import Servicecom from "./servicecom";

const Service = () => {
  const servicearr = [
    {
      heading: "Asp.net",
      subtitile:
        "NET is a developer platform with tools and libraries for building any type of app",
      picture: s1
    },
    {
        heading: ".net",
        subtitile:
          "NET is a developer platform with tools and libraries for building any type of app",
        picture: s1
      },
    {
      heading: "Graphic",
      subtitile:
        "We Consider Designing, an essential identity fabric of any business.",
      picture: s2
    },

    {
      heading: "Asp.net",
      subtitile: "blaaa blaaaa blaaaaa blaaaaa blaaaaaaa",
      picture: s1
    },

    {
      heading: "Asp.net",
      subtitile: "blaaa blaaaa blaaaaa blaaaaa blaaaaaaa",
      picture: s1
    },

    {
      heading: "Asp.net",
      subtitile: "blaaa blaaaa blaaaaa blaaaaa blaaaaaaa",
      picture: s1
    },
    {
      heading: "Graphic",
      subtitile:
        "We Consider Designing, an essential identity fabric of any business.",
      picture: s2
    },
    {
      heading: "Graphic",
      subtitile:
        "We Consider Designing, an essential identity fabric of any business.",
      picture: s2
    }
  ];
  return (
    <div className="dmain">
      <h1 className="headingss">Our Services</h1>
      <div className="smainn">
        {servicearr.map(x => (
          <Servicecom head={x.heading} sub={x.subtitile} image={x.picture} />
        ))}
      </div>
    </div>
  );
};

export default Service;
