import React, { Component } from "react";
import PropTypes from "prop-types";

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default class ClassTodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            value={this.props.todo.id}
            type="checkbox"
            onChange={this.props.markComplete}
          />
          {this.props.todo.title}
          <button
            style={btnStyle}
            onClick={this.props.deleteItem.bind(this, this.props.todo.id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

ClassTodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};
