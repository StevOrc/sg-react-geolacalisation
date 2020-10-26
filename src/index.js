import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log("position", position),
      (error) => console.log("error", error)
    );

    return <div>Latittude</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
