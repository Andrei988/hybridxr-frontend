import React from "react";
import Icofont from "react-icofont";

const placeId = "ChIJMa3_kL5jTEYRlf0kk7_eytA";
const api_key = "AIzaSyClXtp3KWB6bqovTjxkUqKgZD2Ptvd2iTw";

const ContactPage = (props) => {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <h3>
              <span>Contact Us</span>
            </h3>
            <p>{props.title}</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <Icofont icon="map" />
                <h3>Our Address</h3>
                <p>{props.address}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <Icofont icon="envelope" />
                <h3>Email Us</h3>
                <p>{props.email}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <Icofont icon="phone" />
                <h3>Call Us</h3>
                <p>{props.number}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
              <iframe
                title="title"
                className="mb-4 mb-lg-0"
                src={`https://www.google.com/maps/embed/v1/place?key=${api_key}&q=place_id:${placeId}`}
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 384 }}
                allowFullScreen
              />
            </div>
            <div className="col-lg-6">
              <div
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate" />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
