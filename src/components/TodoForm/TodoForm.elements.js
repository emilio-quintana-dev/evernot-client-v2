import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 32px;
`;

export const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: ${({ edit }) => (edit ? "2px solid #5d0cff" : "2px solid #149fff")};
  outline: none;
  width: 425px;
  background: transparent;
  color: #fff;
  font-size: 20px;

  &::placeholder {
    color: #e2e2e2;
  }

  @media screen and (max-width: 991px) {
    width: 320px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  padding: ${({ edit }) => (edit ? "16px 22px" : "16px")};
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: ${({ edit }) =>
    edit
      ? `linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  )`
      : `linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  )`};
  color: #fff;
  text-transform: capitalize;
`;
