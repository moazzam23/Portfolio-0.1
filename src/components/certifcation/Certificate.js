import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import htlm from "../../Assets/certificate/html.png";
import graphic from "../../Assets/certificate/graphic.png";
import email from "../../Assets/certificate/email.png";
import basicReact from "../../Assets/certificate/basic react.png";
import advanceReact from "../../Assets/certificate/advance react.png";
import HtmlCss from "../../Assets/certificate/htmlcss.png";
import javascript from "../../Assets/certificate/javascript.png";
import frontend from "../../Assets/certificate/meta.png";
import uiux from "../../Assets/certificate/uiux.png";
import version from "../../Assets/certificate/version.png";
import { FaCertificate } from "react-icons/fa";

function Certificate() {

  console.log(Certificatedata)
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
       <FaCertificate/>   Professional <strong className="purple">Certification </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         {Certificatedata.map((item) => (
  <Col md={4} className="project-card" key={item.id}>
    <ProjectCard
      imgPath={item.image}
      isBlog={true}
      title={item.title}
      description={item.description}
      ghLink={item.ghlink || '#'} // Fallback if ghLink is missing
    />
  </Col>
))}

        </Row>
      </Container>
    </Container>
  );
}

const Certificatedata=[
  {
    "id":"0",
    "title": "Advanced Basic",
    "description": "Use reusable components to render views where data changes over time. Organize React projects to create more scalable and maintainable websites and apps. Use props to pass data between components. Create dynamic and interactive web pages and apps",
    "ghlink": "https://www.coursera.org/account/accomplishments/verify/JJGR2PW96Q44",
    "image":advanceReact
  }, {
    "id":"1",
    "title": "React Basic",
    "description": "Use reusable components to render views where data changes over time. Organize React projects to create more scalable and maintainable websites and apps. Use props to pass data between components. Create dynamic and interactive web pages and apps",
    "ghlink": "https://www.coursera.org/account/accomplishments/verify/LD6HKSDVRK6L",
    "image":basicReact
  },
  {
    "id":"2",
    "title": "Indepth HTML And CSS",
    "description": "Create a simple form with a responsive layout using HTML5 and CSS. Create a responsive layout using CSS. Create a UI using Bootstrap. Implement debugging tools. CSS Animation, selectors and Effect Implementation",
    "ghlink": "https://www.coursera.org/account/accomplishments/verify/4MK4U8C4R6AX",
    "image":HtmlCss
  },
  {
    "id":"3",
    "title": "Version Control",
    "description": "Implement Version Control systems. Navigate using the command line. Help to collaborate when working in a large team. Use a GitHub repository. Create a GitHub repository. Manage code revisions",
    "ghlink": "https://www.coursera.org/account/accomplishments/verify/9MKMYGN9XVNA",
    "image":version
  },
  {
    "id":"4",
    "title": "Programming With JavaScript",
    "description": " Creating simple JavaScript codes. In-depth knowledge of object-oriented programming (OOP). Real world coding. Writing unit tests using Jest. Creating and manipulating objects and arrays. The benefits of working with UI frameworks.",
    "ghlink": "https://www.coursera.org/account/accomplishments/verify/NPBJUG5LP6D4",
    "image":javascript
  },
  {
    "id":"5",
    "title": "Introduction to Front-End Development",
    "description": "Distinguish between front-end, back-end, and full-stack developers. Benefits of writing clean code. Create responsive web-designs. Create and style a webpage with HTML and CSS. The benefits of working with UI frameworks.",
    "ghlink": "https://www.coursera.org/account/accomplishments/verify/XL82DPSXKCJZ",
    "image":frontend
  },
  {
    "id":"6",
    "title": "Introduction To HTML5",
    "description": " Recognize and use common HTML5 tags. Write the tag that matches with the functionality of the specific piece of code. Be aware of what an editor is and how to use one. Compose HTML5 code that can create images and links.",
    "ghlink": "https://coursera.org/verify/AYBA97HFQG3W",
    "image":htlm
  },
  {
    "id":"7",
    "title": "Foundation Of User Experience (UX) Design",
    "description": "Identify common job responsibilities of entry-level UX designers and other teams. Understand foundational concepts in UX design, such as user-centered design, the design process, and equity-focused design.",
    "ghlink": "https://coursera.org/verify/JT744UCBJWGB",
    "image":uiux
  },
  {
    "id":"8",
    "title": "Write Professional E-mails In English",
    "description": "Identify common job responsibilities of how to write the professional email and how to convey a meaningful message. Know how to use the correct set of words and convey a message that is concise and fulfills the purpose of the email.",
    "ghlink": "https://www.coursera.org/account/accomplishments/verify/PVFZMFNJLAAC",
"image":email

  },
  {
    "id":"9",
    "title": "Graphic Designing Course",
    "description": "Identify common job responsibilities of entry-level designers and other teams you might work with. Understand foundational concepts in design, such as Adobe Photoshop, the design process, Adobe XD, Prototyping, and equity-focused design.",
  "image":graphic
  }
]


export default Certificate;
