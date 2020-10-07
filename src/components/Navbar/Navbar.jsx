import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Alexandra Min</h1>
        <div className="info-bar">
          <p className="info-item">alexmin@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            classname={"info-link"}
            to = {{pathname: 'https://instagram.com'}}
            target = "_blank"
          >
            Instagram
          </Link>

          <Link 
            classname={"info-link"}
            to={{pathname: 'https://spotify.com'}}
            target = "_blank"
          >
            Spotify
          </Link>
          
          <Link 
            classname={"info-link"}
            to={{pathname: 'https://google.com'}}
            target = "_blank"
          >
            Google
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link to = {{pathname: "/about"}}>About</Link>
        <Link to = {{pathname: "/experience"}}>Experience</Link>
        <Link to = {{pathname: "/projects"}}>Projects</Link>
        <Link to = {{pathname: "/education"}}>Education</Link>
      </div>
    </>
  );
}
