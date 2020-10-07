import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Alex Min</h1>
        <div className="info-bar">
          <p className="info-item">alexmin@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://github.com/mpek66" }}
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.linkedin.com/in/mark-pekala/" }}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://spotify.com" }}
            target="_blank"
          >
            Spotify
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={{ pathname: "/about" }}>
            About
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={{ pathname: "/education" }}>
            Education
          </NavLink>
        </div>
      </div>
    </>
  );
}
