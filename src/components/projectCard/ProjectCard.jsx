import React from "react";
import { Link } from "react-router-dom";
import "./projectCard.scss";
import { SwiperSlide } from 'swiper/react';

const ProjectCard = ({ project }) => {
  return (
    <SwiperSlide className="project-card">
      <img className="img-cover" src={project?.img} alt="" />
      <div className="info">
        <img className="profile" src={project.pp} alt="" />
        <div className="text">
          <h3 className="cat">{project.cat}</h3>
          <span>{project.username}</span>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default ProjectCard;
