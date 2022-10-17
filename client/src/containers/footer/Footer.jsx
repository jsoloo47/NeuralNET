import React from "react";
// import gpt3Logo from "../../logo.svg";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedIn from "../../assets/linkedin.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Social Media</h4>
        <img src={instagram} />
        <img src={twitter} />
        <img src={linkedIn} />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <a href="https://github.com/jsoloo47/SentenceSmith">
          <p>GitHub Repo</p>
        </a>
        <a href="https://openai.com/api/">
          <p>API</p>
        </a>
        <a href="https://juansolano.netlify.app/">
          <p>Portfolio</p>
        </a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@ 2022 SentenceSmith. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
