import React from "react";
import "../../styles/Hero.min.css";
import RightImg from "../../images/agencies--light.png";
import BgVid from "../../images/header2.mp4";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <video src={BgVid} autoPlay loop muted />
      <div className="container py-5 d-sm-flex justify-content-between">
        <div className="text py-5">
          <h1>
            Manage projects across <span className="text--teal">agencies</span>{" "}
            and <span className="text--purple">recuiting</span>
          </h1>
          <p>
            Real-time tasks, chat, and powerful customization to get everyone on
            the same page.
          </p>
          <div className="ctas d-flex align-items-center">
            <button className="btn bg--purple text-white">Sign-up</button>
            <button className="btn bg-light mx-2">Discover product</button>
          </div>
        </div>
        <div className="hero-img-wrapper d-none d-sm-block w-100 py-5">
          <img src={RightImg} alt="manage" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
