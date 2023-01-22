import React, { Component } from "react";
import "./App.css";
import Profile from "./component/profile/Profile";
export default class App extends Component {
  state = { isVisible: true };

  handleShow = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="App">
        <button id="hide" onClick={this.handleShow}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>

        {this.state.isVisible ? <Profile /> : null}
      </div>
    );
  }
}
