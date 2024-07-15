import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moonstride from "../../Assets/Projects/moonstride-logo.svg";
import integral from "../../Assets/Projects/integral-logo.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="Tourengine"
              description="• Developed and maintained a tour booking website using React and Next.js, enhancing the user 
                            interface and user experience.  
                            • Implemented server-side logic and backend functionality using Node.js, ensuring seamless integration 
                            with the frontend.  
                            • Collaborated with a team to integrate the tour booking system into a Customer Relationship 
                            Management (CRM) platform. 
                            • Participated in all stages of the development lifecycle, from requirement analysis and design to 
                            implementation, testing, and deployment.  
                            • Utilized version control systems like Git for code management and collaboration. 
                            • Actively participated in team meetings and code reviews to ensure high-quality code and adherence to 
                            best practices."
              demoLink="https://www.moonstride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="AI Buddy"
              description="AI Buddy is a platform created using React and Next.js, which is implemented in moonstride. Using AI Buddy we can chart our trip plan. It generate trip plans using Chat GPT api's. With in the chated plan there will be links for redirect to our other apps for tour package booking, flight booking, hotel booking..."
              demoLink="https://www.moonstride.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="Zoho"
              description="Zoho is one of the accounting software which is connected with moonstride, for managing the accounts of moonstride users. We are maping the invoice and payment details with moonstride and Zoho for managing accounts easly. We have done that using React and Next.js"
              demoLink="https://www.moonstride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="Xero"
              description="Xero is one of the accounting software which is connected with moonstride, for managing the accounts of moonstride users. We are maping the invoice and payment details with moonstride and Xero for managing accounts easly. We have done that using Node.js"
              demoLink="https://www.moonstride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="Quick books"
              description="Quick book is one of the accounting software which is connected with moonstride, for managing the accounts of moonstride users. We are maping the invoice and payment details with moonstride and Quick book for managing accounts easly. We have done that using React and Next.js"
              demoLink="https://www.moonstride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={integral}
              isBlog={false}
              title="Integral"
              description="I have done web scraping from Integral using selenium in python for collecting the and analisying the data of there data analisis."
              demoLink="https://www.integralmemory.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
