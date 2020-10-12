import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
  min-height: 550px;
  margin: 50px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  text-align: left;
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const Input = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: 2.5px solid gray;
  border-radius: 5px;
  margin-bottom: 5px;

  &:focus {
    transition: all 0.1s ease-out;
    border: 3px solid;
    border-color: #ff1e00;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 6px;
  color: grey;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80%;
  height: 40px;
  border-radius: 2px;
  background: #ff1e00;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.1rem;
`;

export const ErrorMsg = styled.p`
  color: red;
  margin: 10px 0px;
`;

export const Span = styled.span`
  font-size: 1rem;
  margin-top: 20px;
  color: black;
`;

export const FormLink = styled(Link)`
  text-decoration: none;
  color: #ff1e00;
`;

export const Title = styled.h1`
  color: black;
  font-size: 30px;
  margin-bottom: 10px;
`;
