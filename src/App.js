import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import AddToDo from "./components/AddToDo";
// import { v4 as uuidv4 } from "uuid";
import About from "./components/About";
import Header from "./components/Header";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
    class_todos: [
      { id: "A", title: "Take out the trash", completed: false },
      { id: "B", title: "Wash Bathrooms", completed: false }
    ]
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => this.setState({ todos: res.data.slice(1, 10) }));
  }

  markComplete = e => {
    let id = e.target.value;
    if (id === "A" || id === "B") {
      this.setState({
        class_todos: this.state.class_todos.map(todo => {
          if (todo.id === parseInt(id)) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });
    } else {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === parseInt(id) || todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });
    }
  };

  deleteItem = e => {
    let id = e;
    if (id === "A" || id === "B") {
      this.setState({
        class_todos: [...this.state.class_todos.filter(todo => todo.id !== id)]
      });
    } else {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>
          this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
          })
        );
    }
  };

  // BEFORE WE ADDED AXIOS CALL TO GET DATA
  // addItem = title => {
  //   const newToDo = { id: uuidv4(), title, completed: false };
  //   this.setState({ todos: [...this.state.todos, newToDo] });
  // };

  addItem = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        completed: false
      })
      .then(res => {
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <h1>To Do List (built by React Basics!)</h1>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddToDo addItem={this.addItem} />
                  <Todos
                    deleteItem={this.deleteItem}
                    markComplete={this.markComplete}
                    todos={this.state.todos}
                    class_todos={this.state.class_todos}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
