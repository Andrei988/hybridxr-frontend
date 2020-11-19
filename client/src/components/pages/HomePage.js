import React from "react";
import ServicesPage from "./ServicesPage";
import { Link } from "react-router-dom";

const services_title =
  "Ut possimus qui ut temporibus culpa velit eveniet modi omnis estadipisci expedita at voluptas atque vitae autem.";

const HomePage = props => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>
            Welcome to <span>{props.companyName}</span>
          </h1>
          <h2>{props.description}</h2>
          <div className="d-flex">
            <Link to="/services" className="btn-get-started scrollto">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <ServicesPage title={services_title} />
    </div>
  );
};

export default HomePage;
