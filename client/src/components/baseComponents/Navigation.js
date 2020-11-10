import React from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";

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
          <div className="container d-flex">
            <div className="contact-info mr-auto">
              <i className="icofont-envelope" />
              <Link to="mailto:contact@example.com">{this.props.email}</Link>
              <i className="icofont-phone" /> {this.props.contactNumber}
            </div>
            <div className="social-links">
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
        <div id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
              <Link to="/">
                {this.props.companyName}
                <span>.</span>
              </Link>
            </h1>
            <Link to="/" className="logo mr-auto" />
            <nav className="nav-menu d-none d-lg-block">
              <Link to="/" className="logo mr-auto" />
              <ul>
                <Link to="/" className="logo mr-auto" />
                <li onClick={() => this.setState({news:"active", home:"", services:"", portfolio:"", about:"", contact:""})} className={this.state.news}>
                  <Link to="/news">News</Link>
                </li>
                <li onClick={() => this.setState({news:"", home:"active", services:"", portfolio:"", about:"", contact:""})} className={this.state.home}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => this.setState({news:"", home:"", services:"active", portfolio:"", about:"", contact:""})} className={this.state.services}>
                  <Link to="/services">Services</Link>
                </li>
                <li onClick={() => this.setState({news:"", home:"", services:"", portfolio:"active", about:"", contact:""})} className={this.state.portfolio}>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li onClick={() => this.setState({news:"", home:"", services:"", portfolio:"", about:"active", contact:""})} className={this.state.about}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={() => this.setState({news:"", home:"", services:"", portfolio:"", about:"", contact:"active"})} className={this.state.contact}>
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
