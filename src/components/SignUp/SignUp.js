import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  Title,
  Container,
  Form,
  InputWrapper,
  Label,
  Input,
  Button,
  ErrorMsg,
  Span,
  FormLink,
} from "./SignUp.elements";

const SignUp = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://thawing-citadel-58036.herokuapp.com/users", values)
      .then((response) => {
        history.push("/");
      })
      .catch(function (error) {
        if (error.response) {
          setErrors(error.response.data.errors[0]);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <InputWrapper>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            ref={inputRef}
          />

          <Label>Email</Label>
          <Input type="text" name="email" onChange={handleChange} />
          <Label>Username</Label>
          <Input type="text" name="username" onChange={handleChange} />
          <Label>Password</Label>
          <Input type="password" name="password" onChange={handleChange} />
          <Label>Password Confirmation</Label>
          <Input
            type="password"
            name="password_confirmation"
            onChange={handleChange}
          />
        </InputWrapper>
        {errors !== "" ? <ErrorMsg>{errors}</ErrorMsg> : null}
        <Button>Sign up</Button>
        <Span>
          Or <FormLink to="/login">log in</FormLink>
        </Span>
      </Form>
    </Container>
  );
};

export default SignUp;
