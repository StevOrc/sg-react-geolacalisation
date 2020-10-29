import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: null,
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        this.setState({
          lat,
        });
      },
      (error) => {
        console.log("aaa", error.message);
        const errorMessage = error.message;
        this.setState({
          errorMessage,
        });
      }
    );
  }

  componentDidUpdate() {}

  render() {
    console.log("AAAAAAAAAAAAA");
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error : {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> Lattitude : {this.state.lat} </div>;
    }

    return <div>Loading </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
