import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chaiwala from "../../Assets/Projects/chaiwala.png";
import chatapp from "../../Assets/Projects/chatapp.png";
import corona from "../../Assets/Projects/corona2.png";
import eccomer from "../../Assets/Projects/eccomer.png";
import food from "../../Assets/Projects/food.png";
import job from "../../Assets/Projects/job.png";
import social from "../../Assets/Projects/social.png";
import netflix from "../../Assets/Projects/netflix.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectdetails.map((item)=>(

          <Col md={4} className="project-card" key={item.id}>
            <ProjectCard
              imgPath={item.image}
              isBlog={false}
              title={item.title}
              description={item.description}
              ghLink={item.github || '#'} 
              demoLink={item.demo}
            />
          </Col>
          ))
        }

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

const projectdetails = [
  {
    "id": 1,
    "image": job,
    "title": "Job Seeking App",
    "description": "This is a full-fledged MERN stack job-seeking platform that allows users to create profiles, upload resumes, search for jobs, and apply directly. Employers can post jobs, filter applicants, and manage the recruitment process. Features include user authentication, profile management, and job search functionality with real-time filtering.",
    "github": "https://github.com/moazzam23/Job_Seeking__MERN_Stack",
    "demo": "https://www.loom.com/share/300c227528b144e28965a31651381056"
  },
  {
    "id": 2,
    "image": social,
    "title": "Social Media App",
    "description": "A social media platform built using the MERN stack, where users can create profiles, follow others, post updates, like and comment on posts. It includes features like real-time chat, notification systems, and feed algorithms to show the most relevant posts to the users. User authentication and authorization are managed via JWT.",
    "github": "https://github.com/moazzam23/Social_Media-App---MERN-project",
    "demo": "https://www.loom.com/share/a1e6b0ce1fff465494b6e00d1990be4f?sid=909cddbd-178c-4318-8f69-99a695bd51a6"
  },
  {
    "id": 3,
    "image": eccomer,
    "title": "Ecommerce Store",
    "description": "This is a fully functional eCommerce application built using the MERN stack. It includes features like product listing, search functionality, user authentication, shopping cart, payment integration (Stripe), and order management for both users and admins. The admin panel allows management of products, categories, and user orders.",
    "github": "https://github.com/moazzam23/Ecommerce_MERN-STACK",
    "demo": "https://www.loom.com/share/22068c75410a4fbbadae98760e42f863?sid=ea9f531e-f464-47ce-92df-23a27dd674ff"
  },
  {
    "id": 4,
    "image": netflix,
    "title": "Netflix - The Movie App",
    "description": "A single-page React application that displays movies categorized by 'Upcoming', 'Popular', and 'Top Rated'. Users can search for movies, view details, and get recommendations. This app fetches data from an external API and displays it dynamically using React hooks and context.",
    "github": "https://github.com/moazzam23/Netflix---the-movie-app",
    "demo": "https://netflix-the-movie-app-hfcq-git-main-moazzambaig.vercel.app/"
  },
  {
    "id": 5,
    "image": chatapp,
    "title": "The Chatting App",
    "description": "A real-time chat application built with React and Socket.io for instant messaging. It supports user authentication, real-time message updates, chat rooms, and private messaging. The app is designed with a sleek and responsive UI for optimal user experience.",
    "github": "https://github.com/moazzam23/chatting-app",
    "demo": "https://chatting-app-phi.vercel.app/"
  },
  {
    "id": 6,
    "image": chaiwala,
    "title": "Pakistani Chai Wala",
    "description": "A colorful single-page application designed to promote a Pakistani Chai Wala's business. The website includes various sections such as a menu, gallery, and contact form. It is visually engaging with CSS animations and transitions, designed to capture the spirit of a local tea vendor.",
    "github": "https://github.com/moazzam23/Pakistani-Chai-Wala",
    "demo": "https://pakistni-chai-wala-1dofs629j-moazzambaig.vercel.app/"
  },
  {
    "id": 7,
    "image": corona,
    "title": "Corona App Prototype",
    "description": "A prototype designed in Adobe XD for a Covid-19 tracking and information app. It displays real-time data about cases, preventive measures, and hospital locations. The app is designed with a user-friendly interface to help users stay updated on the pandemic situation.",
    "github": "https://www.behance.net/gallery/148517665/Covid-App-Prototype"
  },
  {
    "id": 8,
    "image": food,
    "title": "Food Delivery App",
    "description": "A single-page food delivery application designed to allow users to browse through various restaurant menus, place orders, and track delivery status. The app features an interactive UI with sections for restaurant listings, food categories, and a checkout system.",
    "github": "https://github.com/moazzam23/food_dilevery_app",
    "demo": "https://food-dilevery-app.vercel.app/"
  }
];


