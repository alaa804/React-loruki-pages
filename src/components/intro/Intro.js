import React from "react";
import me from "../../img/me.png";
import ReactTypingEffect from "react-typing-effect";
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">
            <ReactTypingEffect
              style={{
                fontSize: "40px",
                color: "#49a09d",
                fontfamily: "Helvetica",
              }}
              text={["Hello My Name Is"]}
            />
          </h2>
          <h1 className="i-name">Alaa Taguiaa</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I Design and Develop services for customers of all sizes,
            specializing in creating stylsh, modern website, web services using
            Javascipt
          </p>
        </div>{" "}
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
