import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.items);
    return (
      <div className="tasks">
        <ul>
          {this.props.items.map((item) => (
            <ListItem value={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
