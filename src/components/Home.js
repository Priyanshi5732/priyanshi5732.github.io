import "../styles/Home.css";
import Bottom from "./Bottom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cv from "./cv.json";
import Navbar from "./Navbar";


function Home() {
  const { name, tagline,contact } = cv;
  return (
  
    <section id="intro">
      <Navbar/>
      <div className="myname">
        <span className="head">
          <h1>{name}</h1>{" "}
        </span>
        <p className="quote">{tagline}</p>
        <div className="icons">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            title="Github"
            class="icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="25px"
              viewbox="0 0 900 900"
              fill="none"
              stroke="#ed5948"
              stroke-width="2"
              style={{ marginRight: "20px" }}
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37.0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44.0 0020 4.77 5.07 5.07.0 0019.91 1S18.73.65 16 2.48a13.38 13.38.0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07.0 005 4.77a5.44 5.44.0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37.0 009 18.13V22" />
            </svg>
          </a>

          <a
            href={contact.email}
            target="_blank"
            rel="noreferrer"
            title="Mail"
            class="icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 1000"
              fill="#ed5948"
              height="25"
              width="30"
              style={{ marginRight: "20px" }}
            >
              <path d="M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200" />
            </svg>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
            class="icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 1000"
              fill="#ed5948"
              height="25"
              width="30"
            >
              <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522" />
            </svg>
          </a>
        </div>
      </div>
    <Bottom/>
    </section>
  
  );
}

export default Home;
