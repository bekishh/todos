import React from "react";

const Todo = ({ text, todo, dispatch }) => {
  const deleteHandler = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  const completeHandler = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;