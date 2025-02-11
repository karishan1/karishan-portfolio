import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./AboutMe.css";

export default function AboutMe() {
  const CONSTANTS = {
    description:
      "Disciplined and motivated Computer Science student with strong technical and interpersonal skills, actively seeking early-career opportunities. Currently in the 3rd year of study at Queen Mary University of London, on track to achieve a First-Class honours. Eager to apply academic knowledge to real-world challenges and contribute to innovative projects within a dynamic team.",
    
    softSkillsHeading: "Soft Skills",
    softSkillsBullets: [
      "Teamwork",
      "Communication",
      "Work Ethic",
      "Punctuality",
      "Problem Solving",
    ],

    technicalSkillsHeading: "Technical Skills",
    technicalSkillsBullets: [
      "Object-Oriented Programming (OOP)",
      "Full-Stack Development",
      "Software Engineering",
      "Database Management",
      "Cloud Computing",
    ],
  };

  // Reusable Function for Bullet Points
  const renderBullets = (bullets) =>
    bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));

  return (
    <div className="about-me-container screen-container">
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <p className="about-me-description">{CONSTANTS.description}</p>

            {/* Technical Skills */}
            <div className="highlight-heading">
              <h3>{CONSTANTS.technicalSkillsHeading}</h3>
            </div>
            <div className="about-me-technical-bullets">
              {renderBullets(CONSTANTS.technicalSkillsBullets)}
            </div>

            {/* Soft Skills */}
            <div className="highlight-heading">
              <h3>{CONSTANTS.softSkillsHeading}</h3>
            </div>
            <div className="about-me-soft-bullets">
              {renderBullets(CONSTANTS.softSkillsBullets)}
            </div>

            {/* Buttons */}
            <div className="about-me-options">
              <button className="btn primary-btn">Contact Me</button>
              <a href="RESUME.pdf" download="Karishan_Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
