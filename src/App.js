import React, { Component } from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import RightPanel from "../src/components/RightPanel";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <RightPanel />
      </div>
    );
  }
}

export default App;
