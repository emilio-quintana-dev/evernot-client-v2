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
          <FormLabel>Username</FormLabel>
          <FormInput type="text" name="username" onChange={handleChange} />
          <FormLabel>Password</FormLabel>
          <FormInput type="password" name="password" onChange={handleChange} />
          <FormLabel>Password Confirmation</FormLabel>
          <FormInput
            type="password"
            name="password_confirmation"
            onChange={handleChange}
          />
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
