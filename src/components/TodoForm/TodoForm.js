import React, { useState } from "react";
import { Form, Input, Button } from "./TodoForm.elements";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        onChange={handleChange}
      />
      <Button>Add todo</Button>
    </Form>
  );
};

export default TodoForm;
