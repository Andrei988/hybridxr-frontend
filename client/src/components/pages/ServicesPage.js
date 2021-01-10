import React from "react";
import ServiceItem from "../items/ServiceItem";
import { Link } from "react-router-dom";

const titles = ["XR Applications", "2D Animation", "3D Modelling / Animation"];

const descriptions = [
  "You can order a personal augmented or virtual reality application for your business, education, training or personal use",
  "You can create your own animated movie, marketing video, advertisement, corporate presentation, educational material, video game and so much more",
  "You can order a 3D model for animation, gaming, interior design, architecture or any other use. It is also possible to 3D print the model",
];

const icons = ["cloudapp", "brand-bada", "diamond"];

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
                title={titles[2]}
                description={descriptions[2]}
                icon={icons[2]}
              />
            </div>
            <div className="col-12 pt-2 col-sm-6 col-md-4 col-lg-4">
              <ServiceItem
                title={titles[1]}
                description={descriptions[1]}
                icon={icons[1]}
              />
            </div>
          </div>
        </div>
      </section>
      <Link to="/contact" className="btn-get-started">
        Get Started
      </Link>
    </div>
  );
};

export default ServicesPage;
