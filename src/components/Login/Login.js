import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  FormSignUp,
  FormContainer,
  FormContentLeft,
  FormContentRight,
  FormInputs,
  FormInput,
  FormLabel,
  FormInputBtn,
  FormImg,
  ErrorMsg,
} from "./Login.elements";

const Login = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/auth", values)
      .then((response) => {
        const token = response.data;
        localStorage.setItem("x-auth-token", token);
        history.push("/");
      })
      .catch((error) => {
        if (error.response) setErrors(`${error.response.data}`);
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
    <FormContainer>
      <FormContentLeft>
        <FormImg src={require("../../img/img-4.svg")} />
      </FormContentLeft>

      <FormContentRight>
        <FormSignUp onSubmit={handleSubmit}>
          <h1>Login</h1>
          <FormInputs>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="text"
              name="email"
              onChange={handleChange}
              ref={inputRef}
            />
            <FormLabel>Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              onChange={handleChange}
            />
          </FormInputs>
          {errors !== "" ? <ErrorMsg>{errors}</ErrorMsg> : null}
          <FormInputBtn>Log in</FormInputBtn>
        </FormSignUp>
      </FormContentRight>
    </FormContainer>
  );
};

export default Login;
