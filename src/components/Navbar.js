import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const [darkMode, setDarkMode] = useState(false); // Theme state

  useEffect(() => {
    // Toggle theme based on darkMode state
    if (darkMode) {
      document.documentElement.style.setProperty(
        "--section-background-color",
        "linear-gradient(to bottom left, rgba(255, 255, 255, 0.9), rgba(200, 200, 255, 0.9))"
        
      );
      document.documentElement.style.setProperty(
        "--image-gradient",
        "linear-gradient(to bottom left, rgba(200, 200, 255, 0.9), rgba(255, 255, 255, 0.9))"
      );
      document.documentElement.style.setProperty("--imp-text-color", "#000");
    } else {
      document.documentElement.style.setProperty(
        "--section-background-color",
        "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))"
      );
      document.documentElement.style.setProperty(
        "--image-gradient",
        "linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863))"
      );
      document.documentElement.style.setProperty("--imp-text-color", "#c770f0");
    }
  }, [darkMode]);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          Moazzam Baig
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

           < Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificate"
                onClick={() => updateExpanded(false)}
              >
                <FaCertificate style={{ marginBottom: "2px" }} /> Certification
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/moazzam23/Portfolio-0.1"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="mode-btn">
              <Button
              style={{marginTop:"9px",background:"none",border:"none"}}
                variant="outline-light"
                onClick={() => setDarkMode(!darkMode)}
                // className="fork-btn-inner"
              >
                {darkMode ? (
                  <BsFillMoonFill style={{ color:"white", fontSize: "1.7em" }} />
                ) : (
                  <BsSun style={{ color:"yellow" ,fontSize: "1.7em" }} />
                )}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
