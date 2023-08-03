import React from "react";
import Todo from "./Todo";

const TodoList = ({ dispatch, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
