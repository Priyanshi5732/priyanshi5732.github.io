import React, { Component } from "react";
import "../styles/Projects.css";
import cv from "./cv.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Projects extends Component {
  render() {
    const projects = cv.projects;
    const now = 60;
    return (
      <section id="project-section">
        <div className="cards">
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
                  <Card.Link style={{ textDecoration: 'none', color: '#ed5948' }} href={project.url}>
                    View Project
                  </Card.Link>
                ))}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </section>
    );
  }
}
