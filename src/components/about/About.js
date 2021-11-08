import React, { useEffect } from "react";
import award from "../../img/award.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About = () => {
  useEffect(() => {
    // INIT SCROLL
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  });
  return (
    <div className="a">
      <div className="a-left" data-aos="flip-right">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I'am a Full Stack Web Developer passionated with the world of the new
          coding and developement web technologies i'am full stack senior web
          developer javascript bootcamp with various skills and the ability of
          coming with fresh ideas in my experience i contribute creating new
          projects of web (e commerce, ...)
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
