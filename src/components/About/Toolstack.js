import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiEclipse } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAsana,
} from "react-icons/si";
import Github from "./Github";
import { BsGithub } from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>VS Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAsana />
        <h5>Asana</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h5>Vercel</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
        <h5>Eclipse</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGithub />
        <h5>Github</h5>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
