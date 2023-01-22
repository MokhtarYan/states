import React from "react";
import { Component } from "react";
import App from "../../App";

export default class Profile extends Component {
  state = { counter: 0, memory: null };
  inc = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  componentDidMount() {
    this.setState({
      memory: setInterval(() => {
        this.inc();
      }, 1000),
    });
  }

  render() {
    return (
      <div id="pres">
        <h1 id="player">Player Name : Monchu Rodriguez</h1>
        <img
          id="pic"
          src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/30/15908411450987.jpg"
          alt="Monchu"
        />
        <div>
          <h3 id="pro">Profession : Professional player </h3>

          <p className="bio">
            Biograpghy: Ramón Rodríguez Jiménez (born 13 September 1999),
            commonly known as Monchu, is a Spanish professional footballer who
            plays as a midfielder for La Liga club Valladolid.
          </p>
          <p>{this.state.counter}</p>
        </div>
      </div>
    );
  }
}
