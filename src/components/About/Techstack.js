import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h5>Express JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5>Redux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h5>Typescript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass />
        <h5>Sass</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h5>Tailwind Css</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h5>FireBase</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>Mongo BD</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h5>PostgresSQL </h5>
      </Col>
    </Row>
  );
}

export default Techstack;
