import React from "react";
import FunctionalTodoItem from "./FunctionalTodoItem";
import PropTypes from "prop-types";
import ClassTodoItem from "./ClassTodoItem";

export default function Todos(props) {
  return (
    <div>
      <div>
        Functional ToDos!
        {props.todos.map(todo => (
          <FunctionalTodoItem
            key={todo.id}
            markComplete={props.markComplete}
            deleteItem={props.deleteItem}
            todo={todo}
          />
        ))}
      </div>
      <div>
        Class-Based Todos!!
        {props.class_todos.map(todo => (
          <ClassTodoItem
            key={todo.id}
            markComplete={props.markComplete}
            deleteItem={props.deleteItem}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  class_todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};
