import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Title = styled.h1`
  color: ${colors.text};
  font-size: 30px;
  text-align: left;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h1`
  color: ${colors.primary};
  font-size: 20px;
  text-align: left;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  min-height: 750px;
  padding: 20px 20px;
  margin: 0 auto;
`;

export const Column = styled.div`
  margin-bottom: 15px;
  margin-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  flex-direction: column;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Text = styled.p`
  color: ${colors.secondary};
  margin-bottom: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const SocialIconLink = styled.a`
  font-size: 2rem;
`;
