import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'

export default class App extends Component {

  state = {lat : null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  this.setState({lat: position.coords.latitude}),
      (error) => this.setState({errorMessage: error.message})
    );
  }

  componentDidUpdate() {}

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error : {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay  lat={this.state.lat} />
    }

    return <div>Loading </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
