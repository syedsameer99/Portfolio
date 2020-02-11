import React, { Component } from "react";
import "./demo.css";
import mem2 from "../../assests/t1.jpg";

class Demo extends Component {
  render() {
    return (
      <div>
  <div class="container">
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={mem2}/>
                <div class="box-content">
                    <h3 class="title">Williamson</h3>
                    <span class="post">Web designer</span>
                </div>
                <ul class="icon">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="box">
                <img src={mem2}/>
                <div class="box-content">
                    <h3 class="title">Miranda Roy</h3>
                    <span class="post">Web developer</span>
                </div>
                <ul class="icon">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
      </div>
    );
  }
}

export default Demo;
