import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";

const Footer = ({email, number, address, sn_title}) => {
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
                {/* {address[0]} <br />
                {address[1]} 
                <br />
                {address[2]}  <br /> */}
                <br />
                <strong>Phone:</strong> {number}
                <br />
                <strong>Email:</strong> {email}
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
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/">Web Design</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/">Web Development</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/">Product Management</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/">Marketing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/">Graphic Design</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                {sn_title}
              </p>
              <div className="social-links mt-3">
                <Link to="/" className="twitter">
                  <Icofont icon="twitter" />
                </Link>
                <Link to="/" className="facebook">
                  <Icofont icon="facebook" />
                </Link>
                <Link to="/" className="instagram">
                  <Icofont icon="instagram" />
                </Link>
                <Link to="/" className="skype">
                  <Icofont icon="skype" />
                </Link>
                <Link to="/" className="linkedin">
                  <Icofont icon="linkedin" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
