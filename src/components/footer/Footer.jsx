/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./footer.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
       Ibrahim Gana Malgwi
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expirience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/ibrahim-gana-malgwi/"
          target="_blank"
          rel="noreferrer"
        > <BsLinkedin /> </a>

        <a
          href="https://github.com/IbrahimMalgwi"
          target="_blank"
          rel="noreferrer"
        > <FaGithub / > </a>

        <a
          href="https://twitter.com/GanzyMalgwi"
          target="_blank"
          rel="noreferrer"
        > <BsTwitter /> </a>

        <a
          href="https://www.facebook.com/GanzyMalgwi"
          target="_blank"
          rel="noreferrer"
        > <BsFacebook /> </a>

        <a
          href="https://www.instagram.com/ganzymalgwi/"
          target="_blank"
          rel="noreferrer"
        > <BsInstagram /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ibrahim Gana Malgwi. All right reserved</small>
      </div>
    </footer>
  );
}

export default Footer