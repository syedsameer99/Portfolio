import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Aboutme from "./component/aboutme/aboutme";
import Input from "./component/input/input";
import Header from "./component/header/header";
import Slider from "./component/slider/slider";
import Team from "./component/team/team";
import Demo from "./component/team/demo";
import Animation from "./component/animation/animation";
import Portfolio from "./component/portfolio/portfolio";
import Web from "./component/portfolio/web";
import Desktop from "./component/portfolio/desktop";
import Footer from "./component/footer/footer";
import Service from "./component/service/service";

function App() {
  return (
    <div className="App">
      <Header/> 
      {/* <Slider/>  */}
      <Homepage/>
      <Service />
      {/* <Aboutme/> */}
      <Input/>
       <Team/>
     <Portfolio/> 
      <Web/>
      <Desktop/>
      {/* <Footer/> */}
      {/* <Demo/> */}
    </div>
  );
}

export default App;
