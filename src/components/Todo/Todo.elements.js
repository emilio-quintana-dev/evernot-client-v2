import styled from "styled-components";
import { colors } from "../../utils/colors";

export const TodoRow = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${({ isComplete }) =>
    isComplete ? "line-through" : "none"};
  margin: 4px auto;
  color: #fafafa;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;
`;

export const TodoIcons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

export const DeleteIcon = styled.div`
  margin-right: 5px;
  color: #fff;
`;

export const EditIcon = styled.div`
  color: #fff;
`;
