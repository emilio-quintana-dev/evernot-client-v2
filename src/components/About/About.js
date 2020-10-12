import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiRails, SiMongodb } from "react-icons/si";
import { IconContext } from "react-icons/lib";

import {
  Title,
  Subtitle,
  Row,
  Container,
  ImgWrapper,
  Img,
  Column,
  Text,
  SocialIcons,
  SocialIconLink,
} from "./About.elements";

const About = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}></IconContext.Provider>
      <Container>
        <Title>About the project & me</Title>

        <Subtitle>About me</Subtitle>
        <Text>
          Hi! I'm Emilio and I'm a Software Developer and aspiring Front-End
          Developer. I enjoy building responsive web applications and learning
          new technologies.
        </Text>

        <Subtitle>The Project</Subtitle>
        <Text>
          Task.io is a web application with user authentication made to save
          reminders. I built this app as a way for me to learn Node, Express,
          MongoDB and practice my React & styled components skills. I ended up
          building two backends,{" "}
          <a
            href="https://github.com/emilio-quintana-dev/task-io-api-v2"
            target="_blank"
            style={{ textDecoration: "none", color: "#cc0001" }}
          >
            <span>one</span>
          </a>{" "}
          in ruby on rails using a postgreSQL database and{" "}
          <a
            href="https://github.com/emilio-quintana-dev/task-io-api-v1"
            target="_blank"
            style={{ textDecoration: "none", color: "green" }}
          >
            <span>another</span>
          </a>{" "}
          using node, express and mongoDB.
        </Text>

        <Subtitle>The Stack</Subtitle>
        <SocialIcons>
          <SocialIconLink>
            <FaReact />
          </SocialIconLink>

          <SocialIconLink>
            <FaNodeJs />
          </SocialIconLink>

          <SocialIconLink>
            <AiFillHtml5 />
          </SocialIconLink>

          <SocialIconLink>
            <DiCss3 />
          </SocialIconLink>

          <SocialIconLink>
            <SiRails />
          </SocialIconLink>

          <SocialIconLink>
            <SiMongodb />
          </SocialIconLink>
        </SocialIcons>
      </Container>
    </>
  );
};

export default About;
