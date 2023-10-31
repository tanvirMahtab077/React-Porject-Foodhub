import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <a href="#" className="logo">
        <span>::</span>Food
      </a>
      <div className="social-media">
        <a href="https://www.facebook.com">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
