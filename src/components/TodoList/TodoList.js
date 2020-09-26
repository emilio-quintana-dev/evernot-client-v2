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
    if (!token) {
      history.push("/login");
    } else {
      props.setLogin(true);
      fetchTodos(token);
    }
  }, []);

  async function fetchTodos(token) {
    const todoObjects = await axios.get("http://localhost:3000/api/v1/todos", {
      headers: {
        "x-auth-token": token,
      },
    });

    setTodos(todoObjects.data);
  }

  const addTodo = async (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    axios
      .post("http://localhost:3000/api/v1/todos", todo, {
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
      })
      .then(function (response) {
        console.log(response);
        const todo = response.data;
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeTodo = async (id) => {
    axios.delete(`http://localhost:3000/api/v1/todos/${id}`, {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    });

    const removedArr = [...todos].filter((todo) => todo._id !== id);
    setTodos(removedArr);
  };

  const updateTodo = async (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    axios
      .put(`http://localhost:3000/api/v1/todos/${id}`, newValue, {
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
      })
      .then(function (response) {
        setTodos((prev) =>
          prev.map((todo) => (todo._id === id ? newValue : todo))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </AppWrapper>
  );
};

export default TodoList;
