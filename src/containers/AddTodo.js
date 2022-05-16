import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";
import '../App.css';

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() != "") {
      dispatch(addTodo(input.value.trim()));
    }
  };
  return (
    <div className="form">
      <input type="text" ref={node => (input = node)}  className="input"/>
      <button type="submit" onClick={onClick} className="btn-submit">
        Add Todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
