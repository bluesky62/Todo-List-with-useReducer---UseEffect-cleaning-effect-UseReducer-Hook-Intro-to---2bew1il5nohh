import React, { useEffect, useReducer, useRef } from "react";
import { todoReducer } from "../reducers/todo";
import "../styles/App.css";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

const initialState = [];

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  };

  return (
    <div id="main">
      <AddTodo handleSubmit={handleSubmit} inputRef={inputRef} />
      {/* Render list of Todo Components here */}
      <Todo state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
