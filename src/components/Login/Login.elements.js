import styled from "styled-components";
import { Link } from "react-router-dom";
export const FormContainer = styled.div`
  display: flex;
  margin: 100px auto;
  max-width: 850px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 958px) {
    grid-template-columns: none;
    margin: 0 auto;
    border-radius: 0px;
    height: 1000px;
  }
`;

export const FormSignUp = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContentLeft = styled.div`
  height: 600px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  border-radius: 10px 0 0 10px;
  position: relative;

  @media screen and (max-width: 958px) {
    border-radius: 0px;
    height: 400px;
  }
`;

export const FormContentRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);

  @media screen and (max-width: 958px) {
    height: 625px;
    border-radius: 0px;
  }
`;

export const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
`;

export const FormImg = styled.img`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormInputBtn = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
`;

export const ErrorMsg = styled.p`
  color: red;
  margin: 10px 0px;
`;

export const FormSpan = styled.span`
  margin-top: 10px;
  color: #fff;
`;

export const FormLink = styled(Link)`
  text-decoration: none;
  color: rgb(39, 176, 255);
`;
