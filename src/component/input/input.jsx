import React, { Component } from "react";
import "./input.scss";

export class Input extends Component {
  state = {
    first: "",
    name: "",
    email: "",
    subject: "",
    type: ""
  };

  render() {
    const onInputchange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
    return (
      <div className="main">
        <div className="hello">
          <h1>Say Hello</h1>
        </div>
        <div className="input">
          <input
            onChange={onInputchange}
            name="first"
            placeholder="first name"
          />
          <input onChange={onInputchange} name="name" placeholder="name" />
          <input onChange={onInputchange} name="email" placeholder="email" />
          <input
            onChange={onInputchange}
            name="subject"
            placeholder="subject of message"
          />
          <input
            onChange={onInputchange}
            name="type"
            placeholder="type of message"
          />
          <button onClick={() => alert(this.state.first)} className="btn">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Input;
