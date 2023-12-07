import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.webp"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ World Wide </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            I am a highly skilled and versatile Software Engineer with extensive
            expertise in Java, Python, and JavaScript, along with their
            respective frameworks. My proficiency spans across the entire
            software development lifecycle, from architecting and developing
            robust applications using technologies like Spring Boot, Django, and
            React, to ensuring seamless deployment and system administration. As
            a seasoned DevOps engineer, I have a proven track record of
            implementing efficient CI/CD pipelines and optimizing development
            workflows. My proficiency extends beyond software development into
            system and database administration. Leveraging my in-depth knowledge
            of systems, I have successfully administered and maintained the
            health and performance of diverse IT infrastructures. Additionally,
            my skills as a Database Administrator encompass designing,
            implementing, and optimizing database systems to ensure data
            integrity and efficient query performance. I thrive in dynamic
            environments where the intersection of development, system
            administration, and DevOps practices converge. My commitment to
            delivering high-quality software solutions, coupled with my ability
            to manage and streamline complex IT ecosystems, positions me as a
            valuable asset capable of driving innovation and excellence in any
            technology-focused organization.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About