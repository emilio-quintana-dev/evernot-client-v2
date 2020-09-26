import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button } from "./TodoForm.elements";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ text: input });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Input
            edit
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
          />
          <Button edit onClick={handleSubmit}>
            Update
          </Button>
        </>
      ) : (
        <>
          <Input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="title"
            onChange={handleChange}
          />
          <Button>Add Todo</Button>
        </>
      )}
    </Form>
  );
};

export default TodoForm;
