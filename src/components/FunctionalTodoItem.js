import React from "react";
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

export default function FunctionalTodoItem(props) {
  const getStyle = () => {
    return {
      textDecoration: props.todo.completed ? "line-through" : "none",
      background: "f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input
          value={props.todo.id}
          type="checkbox"
          onChange={props.markComplete}
        />
        {props.todo.title}
        <button
          style={btnStyle}
          onClick={props.deleteItem.bind(this, props.todo.id)}
        >
          x
        </button>
      </p>
    </div>
  );
}

FunctionalTodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};
