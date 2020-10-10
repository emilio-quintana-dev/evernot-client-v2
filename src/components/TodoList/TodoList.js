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
    const token = localStorage.getItem("Authorization");
    if (!token) {
      history.push("/login");
    } else {
      props.setLoggedIn(true);
      fetchTodos(token);
    }
  }, []);

  async function fetchTodos(token) {
    const todoObjects = await axios.get(
      "https://thawing-citadel-58036.herokuapp.com/todos",
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setTodos(todoObjects.data);
  }

  const addTodo = async (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    axios
      .post("https://thawing-citadel-58036.herokuapp.com/todos", todo, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
      .then(function (response) {
        console.log(response);
        const todo = response.data.todo;
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeTodo = async (id) => {
    axios.delete(`https://thawing-citadel-58036.herokuapp.com/todos/${id}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });

    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const updateTodo = async (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    axios
      .put(
        `https://thawing-citadel-58036.herokuapp.com/todos/${id}`,
        newValue,
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      )
      .then(function (response) {
        setTodos((prev) =>
          prev.map((todo) => (todo.id === id ? newValue : todo))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const completeTodo = (id) => {
    const newTodo = todos.find((todo) => todo.id === id);
    if (newTodo) newTodo.isComplete = !newTodo.isComplete;

    axios
      .put(`https://thawing-citadel-58036.herokuapp.com/todos/${id}`, newTodo, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
      .then(function (response) {
        setTodos((prev) =>
          prev.map((todo) => (todo.id === id ? newTodo : todo))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
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
