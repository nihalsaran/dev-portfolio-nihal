import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects from "./content/projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import experience from "./content/experience";
import Skill from "./components/Skill";
import skills from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blogPosts from "./content/blogPosts";
import ContactForm from "./components/ContactForm";
import BlogPost from "./components/BlogPost";
import ParticleAnimation from "./components/ParticleAnimation";


function App() {
  const projectControls = useAnimation();
  const [projectRef, projectInView] = useInView({ triggerOnce: true });

  const timelineControls = useAnimation();
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (projectInView) {
      projectControls.start("visible");
    }
  }, [projectControls, projectInView]);

  useEffect(() => {
    if (timelineInView) {
      timelineControls.start("visible");
    }
  }, [timelineControls, timelineInView]);


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
     <ParticleAnimation />
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />
      
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
     

      <section id="projects">
        <Heading firstWord="My" secondWord="Projects" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                name={project.name}
                img={project.img}
                description={project.description}
                source={project.sourceCode}
                preview={project.preview}
              />
            </div>
          ))}
        </motion.div>
      </section>

      <section id="experience">
        <Heading firstWord="Work" secondWord="Experience" />
        <motion.div
          className="experience-timeline"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Use the updated ExperienceTimeline component */}
          <ExperienceTimeline experiences={experience} />
        </motion.div>
      </section>

      <section id="skills">
        <Heading firstWord="Skills" secondWord="&Tools" />
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
