import React, { Component } from "react";
import "./input.scss";
import axios from 'axios'

export class Input extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3000/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }

  render() {
    // const onInputchange = event => {
    //   const { name, value } = event.target;
    //   this.setState({ [name]: value });
    // };

    // onNameChange = event => {
    //   this.setState({ name: event.target.value });
    // };

    // onEmailChange = event => {
    //   this.setState({ email: event.target.value });
    // };

    // onMessageChange = event => {
    //   this.setState({ message: event.target.value });
    // };
    // handleSubmit = event => {
    //   event.preventDefault();
    //   console.log(this.state);
    // };

    return (
      <div className="main">
        <div className="hello">
          <h1>Contact Us</h1>
        </div>

        <form
          className="formm"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <input
            name="name"
            placeholder="Your name"
            onChange={this.onNameChange.bind(this)}
            value={this.state.name}
          />
          <input
            //onChange={onInputchange}
            name="email"
            placeholder="Your email address"
            onChange={this.onEmailChange.bind(this)}
            value={this.state.email}
          />
          <input
            //onChange={onInputchange}
            name="message"
            placeholder="Your Message"
            onChange={this.onMessageChange.bind(this)}
            value={this.state.message}
          />

          <button className="btn" type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
    this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
    this.setState({message: event.target.value})
    }
  
 
  
}

export default Input;
