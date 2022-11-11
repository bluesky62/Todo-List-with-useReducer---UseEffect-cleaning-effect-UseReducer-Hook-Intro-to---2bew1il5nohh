import React from "react";
const Todo = ({ state, dispatch }) => {
  return (
    <>
      <ul className="todo">
        {state.map((task, index) => (
          <div className="todo-title" key={index}>
            <li key={index}>
              {task.name}
              <button
                className="todo-delete"
                onClick={() => dispatch({ type: "remove", index })}
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export { Todo };
