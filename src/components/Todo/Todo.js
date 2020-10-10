import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "../TodoForm/TodoForm";
import { TodoRow, TodoIcons, DeleteIcon, EditIcon } from "./Todo.elements";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <TodoRow key={index} isComplete={todo.isComplete}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <TodoIcons>
        <DeleteIcon onClick={() => removeTodo(todo.id)}>
          <RiCloseCircleLine />
        </DeleteIcon>

        <EditIcon onClick={() => setEdit({ id: todo.id, value: todo.text })}>
          <TiEdit />
        </EditIcon>
      </TodoIcons>
    </TodoRow>
  ));
}

export default Todo;
