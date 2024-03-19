import React from 'react';
import "../styles/Bottom.css";
import cv from "./cv.json";
import {
  Link,
} from "react-router-dom";
//for footer of webpage
function Bottom(){
    const refreshPage = () => {
        window.location.reload();
      };
      const {contact } = cv;

    return (
        <div className="bottom-part">
      <p className="footer">© 2021 &bull; <Link to="#" onClick={refreshPage} className="bottom-text" >Priyanshi Verma</Link> &bull; <Link to="https://creativecommons.org/licenses/by-nc/4.0/"  className="bottom-text" >CC BY-NC 4.0</Link></p>
      <p className="footer">Hosted with <span className="heart">&#10084;</span> on <a href= {contact.visitportfolio}  target="_blank" rel="noopener noreferrer" className="bottom-text"> Github</a></p>
    </div>
    );
};

export default Bottom;