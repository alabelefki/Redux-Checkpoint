import React from "react";
import '../App.css';
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Footer from "../containers/Footer";

const App = () => (
  <div className="App">
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default App;
