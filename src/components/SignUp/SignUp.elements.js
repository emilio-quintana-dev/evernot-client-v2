import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-height: 600px;
  text-align: center;
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

export const Label = styled.label`
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 6px;
  color: ${colors.secondary};
`;

export const Input = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: 2px solid grey;
  margin-bottom: 5px;

  &:focus {
    transition: all 0.1s ease-out;
    border: 3px solid;
    border-color: ${colors.primary};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: ${colors.primary};
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
  margin-top: 10px;
  color: ${colors.text};
`;

export const FormLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
`;

export const Title = styled.h1`
  color: ${colors.text};
  font-size: 30px;
  margin-bottom: 10px;
`;
