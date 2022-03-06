import React from "react";
import "./HeroSection.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeroSection = () => {
  return (
    <div className="container hero-container">
      <h1>Hi, my name is</h1>
      <h2>Yuki Takai</h2>
      <p>Digital Craftsman(Web Designer,Web Developer)</p>
      <div>
        <AnchorLink offset="80" href="#works">
          <button className="home-btn">Check My Works!</button>
        </AnchorLink>
      </div>
    </div>
  );
};
export default HeroSection;
