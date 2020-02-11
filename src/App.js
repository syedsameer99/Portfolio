import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import Service from './component/service/service';
import Aboutme from './component/aboutme/aboutme';
import Input from './component/input/input';
import Header from './component/header/header';
import Slider from './component/slider/slider';
import Team from './component/team/team';
import Demo from './component/team/demo';
import Animation from './component/animation/animation'


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Slider/> */}
     {/* <Homepage/> */}
     {/* <Service/>
     <Aboutme/>
     <Input/> */}
     <Team/>
     <Animation/>
     {/* <Demo/> */}

    </div>
  );
}

export default App;
