import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container about-container" id="about">
      <h1>
        <span>01.</span> About Me
      </h1>
      <p>
        新潟県出身、新潟市在住
        <br />
        大学時代は英語の習得に努め、カナダに1年間留学
        <br />
        卒業後の2019年から県内のIT会社に就職し、現在に至る
      </p>
      <p>趣味：DIY　釣り　映画鑑賞　家庭菜園</p>
    </div>
  );
};

export default About;
