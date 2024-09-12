import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { TbNetwork} from "react-icons/tb"
import {SiAdobexd,SiAdobeillustrator, SiTailwindcss, SiSass, SiExpress, SiVercel} from "react-icons/si"
import { FaReact ,FaBootstrap, FaCss3, FaJava, FaNodeJs, FaEnvelope } from 'react-icons/fa'
import {DiFirebase, DiHtml5, DiJavascript, DiMongodb, DiPostgresql} from "react-icons/di"
import { FaLinkedinIn } from "react-icons/fa";
import { BsBehance, BsPhone } from "react-icons/bs";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React JS, Javascript, Java and Postgresql . </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Enterprize Level.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Java</b>
              </i>

              <br />
              <br />
              Customizing the Open Source ERP System  <b className="purple">Idempiere</b>
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

{/* Experience Section */}
<Row>
          <h1 className="label" style={{ fontSize: "2.6em", padding: "20px 0px" }}>
           <TbNetwork/> Experience
          </h1>
          <Col md={12} className="d-flex justify-content-center">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content left">
                  <h4>ID Logix, Johar Town Lahore</h4>
                  <p><label className="label">Position:</label>  Full Stack Developer</p>
                  <p> <label className="label">Duration:</label> Sep-2023 To Date  (On-Site)</p>
                  <p><label className="label">Technology:</label>  React JS, JavaScript, Java, Postgresql</p>
                </div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content right">
                  <h4>Premium Ebizols Digital, Bahria Town Lahore</h4>
                  <p><label className="label">Position:</label>   React JS Developer</p>
                  <p> <label className="label">Duration:</label>  Aug-2022 To Oct-2022  (On-Site)</p>
                  <p><label className="label">Technology:</label>  React JS, JavaScript, HTML, CSS, Bootstrap</p>  
                                </div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content left">
                <h4>  Indian Institute Of Digital Education</h4>
                <p><label className="label">Position:</label>  Digital Marketing Internee</p>
                  <p> <label className="label">Duration:</label> Feb-2022 To March-2022  (Online)</p>
                  <p><label className="label">Technology:</label>  Social Media Marketing, SEO, Content
                  Writing and Google Sheet Management</p> 
                                 </div>
                <div className="timeline-line"></div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
        <h1 className="purple" style={{ fontSize: "2.6em",padding:"20px 0px" }}>
              Skills
            </h1>
          <Col md={12}  className="d-flex flex-column justify-content-center">
          <marquee className='skillmarquee'> 
         <DiHtml5/> HTML    <FaCss3/> CSS <DiJavascript/> Javascript <FaReact/> React <SiSass/> Sass  <SiTailwindcss/> Tailwind Css <DiMongodb/> Mongodb  </marquee>
         <marquee className='skillmarquee' direction='right'> <FaJava/> Java <DiPostgresql/> Postgresql  <SiExpress/> Express Js <FaNodeJs/> Node JS   <FaBootstrap/> React Bootstrap</marquee>
         <marquee className='skillmarquee'><SiAdobexd/> Abode XD <SiAdobeillustrator/> Adobe Illustrator  <FaReact/> React Router Dom <DiFirebase/> Firbase</marquee>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="mailto:baigm9033@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:0331-4483362"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/moazzambaig"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsBehance />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/moazzam23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://vercel.com/dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiVercel />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mirza-muhammad-moazzam-baig-0b127a215/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/moazzambaig23/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={12}>
          <div className="container2">
      <div className="contact-form">
        <form action="https://formspree.io/f/xoqoolne" method="POST" className="contact-inputs" > 
        {/* <h2> Contact Or Have A Coffee For Talk </h2><br /> */}
        <input style={{marginTop:"-110px"}} type="text"  placeholder="username" name="username" required autoComplete="off" />
        <input type="email"  placeholder="Enter active email" name="email" required autoComplete="off" />
       <textarea name="description"  required autoComplete="off" placeholder="enter your message" cols={30} rows={10}></textarea>
<input type="submit" />
        </form>
      </div>
    </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
