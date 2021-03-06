import styled from "styled-components";
import { colors } from "../../utils/colors";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 600px;
  min-height: 600px;
  text-align: center;
  margin: 50px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

export const Title = styled.h1`
  color: ${colors.text};
  font-size: 30px;
  margin-bottom: 10px;
`;
