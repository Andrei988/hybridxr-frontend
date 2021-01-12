import React from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import favicon from "../../assets/img/favicon.png";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: "",
      home: "active",
      services: "",
      portfolio: "",
      about: "",
      contact: "",
    };
  }

  render() {
    return (
      <header>
        <div
          id="topbar"
          className="d-none d-lg-flex align-items-center fixed-top"
        >
          <div id="sub-topbar" className="container d-flex">
            <div className="contact-info mr-auto">
              <i className="icofont-envelope" />
              <Link to="/contact">{this.props.email}</Link>
              <i className="icofont-phone" /> {this.props.contactNumber}
            </div>
            <div className="social-links">
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
        <div id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="mr-auto">
              <Link to="/">
                <img id="favicon" src={favicon} alt={favicon}></img>
              </Link>
            </h1>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li
                  onClick={() =>
                    this.setState({
                      news: "active",
                      home: "",
                      services: "",
                      portfolio: "",
                      about: "",
                      contact: "",
                    })
                  }
                  className={this.state.news}
                >
                  <Link to="/news">News</Link>
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      news: "",
                      home: "active",
                      services: "",
                      portfolio: "",
                      about: "",
                      contact: "",
                    })
                  }
                  className={this.state.home}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      news: "",
                      home: "",
                      services: "",
                      portfolio: "",
                      about: "active",
                      contact: "",
                    })
                  }
                  className={this.state.about}
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      news: "",
                      home: "",
                      services: "active",
                      portfolio: "",
                      about: "",
                      contact: "",
                    })
                  }
                  className={this.state.services}
                >
                  <Link to="/services">Services</Link>
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      news: "",
                      home: "",
                      services: "",
                      portfolio: "",
                      about: "",
                      contact: "active",
                    })
                  }
                  className={this.state.contact}
                >
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Navigation;
