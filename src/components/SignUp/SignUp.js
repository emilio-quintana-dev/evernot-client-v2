import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  FormContainer,
  FormSignUp,
  FormInputs,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMsg,
  FormLogIn,
  FormLink,
} from "./SignUp.elements";

const SignUp = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
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
      .post("http://localhost:3000/api/v1/users", values)
      .then((response) => {
        const token = response.data;
        localStorage.setItem("x-auth-token", token);
        history.push("/");
      })
      .catch(function (error) {
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
      <FormSignUp onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <FormInputs>
          <FormLabel>Name</FormLabel>
          <FormInput
            type="text"
            name="name"
            onChange={handleChange}
            ref={inputRef}
          />

          <FormLabel>Email</FormLabel>
          <FormInput type="text" name="email" onChange={handleChange} />

          <FormLabel>Password</FormLabel>
          <FormInput type="text" name="password" onChange={handleChange} />
        </FormInputs>
        {errors !== "" ? <ErrorMsg>{errors}</ErrorMsg> : null}
        <FormButton>Sign up</FormButton>
        <FormLogIn>
          Or <FormLink to="/login">log in</FormLink>
        </FormLogIn>
      </FormSignUp>
    </FormContainer>
  );
};

export default SignUp;
