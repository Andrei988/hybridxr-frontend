import React from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const AboutPage = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title about-title">
          <h2>About</h2>
          <h3>
            Find Out More <span>About Us</span>
          </h3>
          <p>
            XR stands for extended reality which is a combination of augmented,
            virtual and mixed realities. Our goal is to improve the healthcare,
            education, sport and entertainment by creating innovative solutions
            to current problems using the latest XR technologies.<br/>Information
            about the current projects will be available soon...
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="zoom-out" data-aos-delay={100}>
            <YouTube videoId="wvVG_Lo0hdg" className="youtube-video" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <h3>
              If you want to take your business to the next level or solve a
              personal problem by using the latest visualizing technologies
            </h3>
            <p className="font-italic">
              Order your own XR application right now! Here is the best
              consultancy and software development
            </p>
            <ul>
              <li>
                <Icofont icon="businessman" />
                <div>
                  <h5 className="pt-3">Consultancy</h5>
                </div>
              </li>
              <li>
                <Icofont icon="code" />
                <div>
                  <h5 className="pt-3">Software development</h5>
                </div>
              </li>
              <li>
                <Icofont icon="diamond" />
                <div>
                  <h5 className="pt-3">3D / 2D content creation</h5>
                </div>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
      <div id="nav-button" className="row pt-2 pb-2">
        <div className="col text-center">
          <Link
            to="/services"
            className="btn-get-started align-self-center pt-2"
          >
            Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
