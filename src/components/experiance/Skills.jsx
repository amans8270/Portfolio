import React from "react";
import "./experiance.css";

const Skills = ({ title, icon, details }) => {
  return (
    <article className="experiance__details">
      <span className="experiance__details-icon">{icon}</span>
      <div className="">
        <h4>{title}</h4>
        <small className="text-light">{details}</small>
      </div>
    </article>
  );
};

export default Skills;
