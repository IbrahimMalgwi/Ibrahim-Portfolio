import React from 'react'
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import {FaGithub} from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank"> <BsLinkedin /> </a>
      <a href="https://github.com" target="_blank"> <FaGithub /> </a>
      <a href="https://twitter.com" target="_blank"> <BsTwitter/> </a>
    </div>
  );
}

export default HeaderSocial