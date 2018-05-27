import React, { Component } from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import RightPanel from "../src/components/RightPanel";
import Styles from "./styles";

class App extends Component {
  render() {
    return (
      <div style={Styles.appWrapper}>
        <Sidebar />
        <RightPanel />
      </div>
    );
  }
}

export default App;
