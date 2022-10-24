import React from "react";
import "./footer.css";
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Aman
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experiance">Experiance</a>
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
        <a href="https://www.linkedin.com/in/aman-singh-03571713a/"><AiFillLinkedin/></a>
        <a href="whatsapp://send?text=' Hello!! '&phone=91' + 8173870265"><BsWhatsapp/></a>
        <a href="https://www.facebook.com/profile.php?id=100003384390329"><AiFillFacebook/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;All rights reserved@2022 Aman Singh</small>
      </div>
    </footer>
  );
};

export default Footer;
