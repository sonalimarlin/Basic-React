import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddToDo extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        style={{ display: "flex", paddingTop: "10px", paddingBottom: "10px" }}
        onSubmit={this.onSubmit}
      >
        <input
          style={{ flex: "10", padding: "10px" }}
          type="text"
          name="title"
          placeholder="Enter to do item"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          className="btn"
          style={{ flex: "1" }}
          value="Submit"
          type="submit"
        />
      </form>
    );
  }
}

AddToDo.propTypes = {
  addItem: PropTypes.func.isRequired
};
