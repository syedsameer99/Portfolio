// import React, { Component } from "react";
// import Slide from "./slide";
// import Leftarrow from "./leftarrow";
// import Rightarrow from "./rightarrow";

// class Slider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       images: [
//         "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
//         "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
//         "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
//         "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
//         "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
//         "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
//         "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
//         "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
//       ],
//       currentIndex: 0,
//       translateValue: 0
//     };
//   }
//   goToPrevSlide = () => {
//     this.setState(prevState => ({
//         currentIndex: prevState.currentIndex + 1,
//         translateValue: prevState.translateValue + -(this.slideWidth())
//       }));
//   };

//   goToNextSlide = () => {
//     this.setState(prevState => ({
//         currentIndex: prevState.currentIndex + 1,
//         translateValue: prevState.translateValue + -(this.slideWidth())
//       }));
//   };
//   slideWidth = () => {
//     return document.querySelector('.slide').clientWidth
//  }
//   render() {
//     return (
//       <div className="slider">
//         <div
//           className="slider-wrapper"
//           style={{
//             transform: `translateX(${this.state.translateValue}px)`,
//             transition: "transform ease-out 0.45s"
//           }}
//         >
//           {this.state.images.map((image, i) => (
//             <Slide key={i} image={image} />
//           ))}
//         </div>
//         {/* {this.state.images.map((image, i) => (
//           <Slide key={i} image={image} />
//         ))} */}

//         <Leftarrow goToPrevSlide={this.goToPrevSlide} />
//         <Rightarrow goToNextSlide={this.goToNextSlide} />
//       </div>
//     );
//   }
// }

// export default Slider;
