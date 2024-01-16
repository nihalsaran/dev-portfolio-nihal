// components/ExperienceTimeline.jsx
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "/Users/nihalsarandasduggirala/Desktop/react-dev-portfolio-main/src/App.css"; // Import the new CSS file

const ExperienceTimeline = ({ experiences }) => {
  return (
    <VerticalTimeline layout="1-column">
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          date={`${exp.startDate} - ${exp.endDate}`}
          iconStyle={{ background: "#fa3939", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">{exp.jobTitle}</h3>
          <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
          <p className="vertical-timeline-element-description">{exp.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
