import React from 'react'
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ibrahim-gana-malgwi/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>
      
      <a
        href="https://github.com/IbrahimMalgwi"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaGithub />{" "}
      </a>

      <a
        href="https://twitter.com/GanzyMalgwi"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsTwitter />{" "}
      </a>

      <a
        href="https://www.facebook.com/GanzyMalgwi"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsFacebook />{" "}
      </a>

      <a
        href="https://www.instagram.com/ganzymalgwi/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsInstagram />{" "}
      </a>
    </div>
  );
}

export default HeaderSocial