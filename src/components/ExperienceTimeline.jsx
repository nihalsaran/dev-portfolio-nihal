// components/ExperienceTimeline.jsx
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceTimeline = ({ experiences }) => {
  const timelineStyle = {
    fontFamily: "Share Tech Mono, monospace",
  };

  const elementStyle = {
    background: "rgba(5, 0, 0, 0.3)",
    boxShadow: "0 8px 32px 0 rgba(135, 47, 31, 0.37)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    border: "1px 0 solid rgba(255, 255, 255, 0.18)",
    borderRadius: "10px",
    padding: "20px",
    marginLeft: "50px", // Adjust the spacing from the timeline line
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fa3939",
  };

  const subtitleStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "#fff",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#ddd",
    marginTop: "10px",
  };

  return (
    <VerticalTimeline style={timelineStyle} layout="1-column">
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          date={`${exp.startDate} - ${exp.endDate}`}
          iconStyle={{ background: "#fa3939", color: "#fff" }}
          contentStyle={elementStyle}
        >
          <h3 style={titleStyle}>{exp.jobTitle}</h3>
          <h4 style={subtitleStyle}>{exp.company}</h4>
          <p style={descriptionStyle}>{exp.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
