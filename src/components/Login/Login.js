import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  Title,
  Container,
  Form,
  InputWrapper,
  Input,
  Label,
  Button,
  ErrorMsg,
  Span,
  FormLink,
} from "./Login.elements";

const Login = (props) => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "demo@gmail.com",
    password: "password",
  });
  const [errors, setErrors] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://thawing-citadel-58036.herokuapp.com/auth/login", values)
      .then((response) => {
        const { token } = response.data;
        props.setLoggedIn(true);
        localStorage.setItem("Authorization", token);
        history.push("/");
      })
      .catch((error) => {
        if (error.response) {
          setErrors("Invalid email or password");
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
        <Title>Login</Title>
        <InputWrapper>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            ref={inputRef}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </InputWrapper>
        {errors !== "" ? <ErrorMsg>{errors}</ErrorMsg> : null}
        <Button>Log in</Button>
        <Span>
          Don't have an account ?<FormLink to="/signup"> Sign up</FormLink>
        </Span>
      </Form>
    </Container>
  );
};

export default Login;
