import React, { useState } from "react";
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
} from "./Login.elements";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/auth", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data;
        localStorage.setItem("x-auth-token", token);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
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
            <FormInput type="text" name="email" onChange={handleChange} />
            <FormLabel>Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              onChange={handleChange}
            />
          </FormInputs>

          <FormInputBtn>Log in</FormInputBtn>
        </FormSignUp>
      </FormContentRight>
    </FormContainer>
  );
};

export default Login;
