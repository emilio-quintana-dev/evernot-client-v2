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
  FormSpan,
  FormLink,
} from "./Login.elements";

const Login = (props) => {
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
      .post("https://thawing-citadel-58036.herokuapp.com/auth/login", values)
      .then((response) => {
        console.log(response);
        const { token } = response.data;
        props.setLoggedIn(true);
        localStorage.setItem("Authorization", token);
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
          <FormSpan>
            Don't have an account ?<FormLink to="/signup"> Sign up</FormLink>
          </FormSpan>
        </FormSignUp>
      </FormContentRight>
    </FormContainer>
  );
};

export default Login;
