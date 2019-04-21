import React, { Component } from "react";
import DemoComponent from "./component/demoComponent";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DemoComponent />
      </div>
    );
  }
}

export default App;
