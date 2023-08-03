import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [state, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(state.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(state.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(state);
        break;
    }
  };

  const addTodoHandler = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { text: inputText, completed: false, id: Math.random() * 1000 },
    });
    setInputText("");
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        addTodoHandler={addTodoHandler}
      />
      <TodoList filteredTodos={filteredTodos} dispatch={dispatch} todos={state} />
    </div>
  );
}

export default App;
