import React from "react";
import "./App.css";

import Input from "./Input";
import List from "./List";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };
  }

  handleEntry(input) {
    if (input == "") return;
    let list = [input, ...this.state.list];

    this.setState({
      list: list,
    });
  }

  render() {
    return (
      <div className="app">
        <h2> TODO APP</h2>
        <Input handleEntry={this.handleEntry.bind(this)} />
        <h3>TASKS TO BE DONE :)</h3>
        <hr></hr>

        <List items={this.state.list} />
      </div>
    );
  }
}

export default App;
