import React from "react";
import "./team.scss";
import Member from "./member";
import member1 from "../../assests/t1.jpg";
import member2 from "../../assests/s1.jpg";

const Team = () => {
  const memberArray = [
    {
      name: "Sameer",
      backgroundd: member1,
      facebook:"https://www.facebook.com/sarmed.rizvi"
    },
    {
      name: "Ahsan",
      backgroundd: member2
    },
    {
      name: "Sarmad",
      backgroundd: member1
    },
    {
      name: "Khaismah",
      backgroundd: member2
    },
    {
      name: "Maaz",
      backgroundd: member1
    },
    {
        name: "sam",
        backgroundd: member2
      },
      {
        name: "khuzaima",
        backgroundd: member2
      }
  ];
  return (
    <div className="team">
      <h1 className="our">OUR TEAM</h1>
      <h3 className="sub">
        "Alone we can do so little, together we can do so much."
      </h3>
      <div className="m">
        {memberArray.map(array => (
          <Member membername={array.name} backgroundd={array.backgroundd} facebook={array.facebook}/>
        ))}

        {/* <Member membername="Sarmad"/>
            <Member membername="Salman"/>
            <Member membername="Maaz"/> */}
      </div>
    </div>
  );
};

export default Team;
