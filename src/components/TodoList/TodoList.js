import React, { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import { AppWrapper } from "./TodoList.elements";
import axios from "axios";
import { useHistory } from "react-router-dom";

const TodoList = (props) => {
  let history = useHistory();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");
    if (!token) history.push("/login");
    props.setLogin(true);
  });

  const addTodo = (todo) => {
    console.log("adding todo...");
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {};

  const updateTodo = (id) => {};

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <AppWrapper>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </AppWrapper>
  );
};

export default TodoList;
