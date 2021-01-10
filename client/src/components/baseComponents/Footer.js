import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";

const Footer = ({ email, number, address, sn_title }) => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                Hybrid XR<span>.</span>
              </h3>
              <p>
                <br />
                <strong>Phone:</strong> {number}
                <br />
                <strong>Email:</strong> {email}
                <br />
                <br />
                {address[1]}
                <br />
                {address[2]}
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/services">XR Applications</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/services">3D Modelling / Animation </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/services">2D Animation</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>{sn_title}</p>
              <div className="social-links mt-3">
              <a
                href="https://www.facebook.com/Hybrid-XR-103887474899498/"
                className="facebook"
              >
                <Icofont icon="facebook" />
              </a>
              <a
                href="https://www.instagram.com/hybrid.xr/"
                className="instagram"
              >
                <Icofont icon="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/hybrid-xr"
                className="linkedin"
              >
                <Icofont icon="linkedin" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
