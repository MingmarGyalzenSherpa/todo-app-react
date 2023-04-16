import React from "react";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <input
          onChange={this.handleChange.bind(this)}
          type="text"
          placeholder="Enter task"
          value={this.state.text}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            let text = this.state.text;
            this.setState({ text: "" });
            this.props.handleEntry(text);
          }}
        >
          ADD
        </button>
      </form>
    );
  }
}

export default Input;
