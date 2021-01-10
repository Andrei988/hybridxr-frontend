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
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="zoom-out" data-aos-delay={100}>
            <YouTube videoId="60yP8f5E-B4" className="youtube-video" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <Icofont icon="icofont-automation" />
                <div>
                  <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                  <p>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p>
                </div>
              </li>
              <li>
              <Icofont icon="map" />
                <div>
                  <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                  <p>
                    Quo totam dolorum at pariatur aut distinctio dolorum
                    laudantium illo direna pasata redi
                  </p>
                </div>
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div>
      </div>
      <div id="nav-button" className="row pt-2 pb-2">
        <div className="col text-center">
          <Link to="/services" className="btn-get-started align-self-center pt-2">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
