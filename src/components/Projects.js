import React, { Component } from "react";
import "../styles/Projects.css";
import Bottom from "./Bottom";
import cv from "./cv.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default class Projects extends Component {
  render() {
    const projects = cv.projects;
    const now = 60;
    return (
      <section id="project-section">
        <div className="cards">
          <Row xs={5} md={2} className="g-2">
            <Card style={{ width: "17rem" }}>
              <Card.Body>
                {/* Render project title */}
                {projects.map((project) => (
                  <div key={project.id}>
                    <Card.Title>{project.title}</Card.Title>
                  </div>
                ))}
                <Card.Text>
                  {/* Render project details */}
                  {projects.map((project) => (
                    <div key={project.id}>
                      
                      <p>{project.description}</p>
                      
                    </div>
                  ))}
                </Card.Text>
                {/* Render project url */}
                <Button variant="secondary">
                  {projects.map((project) => (
                    <Card.Link
                      style={{ textDecoration: "none", color: "#ed5948" }}
                      href={project.url}
                    >
                      View Project
                    </Card.Link>
                  ))}
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </div>
        <div className="Project-footer"></div>
      </section>
      
    );
  }
}
