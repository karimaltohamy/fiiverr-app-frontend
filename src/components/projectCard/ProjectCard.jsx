import React from "react";
import { Link } from "react-router-dom";
import "./projectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <Link className="project-card">
      <img className="img-cover" src={project?.img} alt="" />
      <div className="info">
        <img className="profile" src={project.pp} alt="" />
        <div className="text">
          <h3 className="cat">{project.cat}</h3>
          <span>{project.username}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
