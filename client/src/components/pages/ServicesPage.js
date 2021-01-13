import React from "react";
import ServiceItem from "../items/ServiceItem";
import { Link } from "react-router-dom";

const titles = [
  "Augmented Reality",
  "Virtual Reality",
  "Mixed Reality ",
  "3D Modelling / Animation / Printing",
  "2D Drawing / Animation",
  "Consultancy",
];

const descriptions = [
  "You can order an augmented reality application developed for devices that have access to a camera",
  "You can order a virtual reality application developed for Oculus Quest 2, Valve Index, HTC Vive Cosmos, PS VR or any other device that supports VR",
  "You can order a mixed reality application developed for Microsoft HoloLens 2, Magic Leap or any other mixed reality device",
  "You can order a 3D model for animation, gaming, interior design, architecture or any other use. It is also possible to 3D print the model",
  "You can create your own animated movie, marketing video, advertisement, corporate presentation, educational material, video game and so much more",
  "We can find the best XR solution for improving your business / life",
];

const icons = [
  "code",
  "drawing-tablet",
  "diamond",
  "code",
  "drawing-tablet",
  "diamond",
];

const ServicesPage = (props) => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title services-title">
            <h2>Services</h2>
            <h3>
              Check our <span>Services</span>
            </h3>
            <p>{props.title}</p>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-12 pt-2 col-sm-6 col-md-4 col-lg-4">
              <ServiceItem
                title={titles[0]}
                description={descriptions[0]}
                icon={icons[0]}
              />
            </div>
            <div className="col-12 pt-2 col-sm-6 col-md-4 col-lg-4">
              <ServiceItem
                title={titles[1]}
                description={descriptions[1]}
                icon={icons[1]}
              />
            </div>
            <div className="col-12 pt-2 col-sm-6 col-md-4 col-lg-4">
              <ServiceItem
                title={titles[2]}
                description={descriptions[2]}
                icon={icons[2]}
              />
            </div>
            <div className="col-12 pt-2 col-sm-6 col-md-4 col-lg-4">
              <ServiceItem
                title={titles[3]}
                description={descriptions[3]}
                icon={icons[3]}
              />
            </div>
            <div className="col-12 pt-2 col-sm-6 col-md-4 col-lg-4">
              <ServiceItem
                title={titles[4]}
                description={descriptions[4]}
                icon={icons[4]}
              />
            </div>
            <div className="col-12 pt-2 col-sm-6 col-md-4 col-lg-4">
              <ServiceItem
                title={titles[5]}
                description={descriptions[5]}
                icon={icons[5]}
              />
            </div>
          </div>
        </div>
        <div id="nav-button" className="row pt-4 pb-2">
          <div className="col text-center">
            <Link
              to="/contact"
              className="btn-get-started align-self-center pt-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
