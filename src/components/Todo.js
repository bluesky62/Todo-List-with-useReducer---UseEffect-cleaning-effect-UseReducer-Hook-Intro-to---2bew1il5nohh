import React from "react";
const Todo = ({ state, dispatch }) => {
  return (
    <>
      <div className="todo">
        {state.map((task, index) => (
          <div className="todo-title" key={index}>
            {task.name}
            <button
              className="todo-delete"
              onClick={() => dispatch({ type: "remove", index })}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export { Todo };
