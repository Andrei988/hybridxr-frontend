import React from "react";
import Icofont from "react-icofont";
import { connect } from "react-redux";
import { sendEmail, getCompanyInfo } from "../../actions";
import ContactForm from "../items/ContactForm";

const placeId = "ChIJMa3_kL5jTEYRlf0kk7_eytA";
const api_key = "AIzaSyClXtp3KWB6bqovTjxkUqKgZD2Ptvd2iTw";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  sendEmail = (formValues) => {
    this.props.sendEmail(formValues);
  };

  render() {
    return (
      <div>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <h3>
                <span>Contact Us</span>
              </h3>
              <p>{this.props.title}</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="info-box mb-4">
                  <Icofont icon="map" />
                  <h3>Our Address</h3>
                  <p>{this.props.address}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <Icofont icon="envelope" />
                  <h3>Email Us</h3>
                  <p>{this.props.email}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <Icofont icon="phone" />
                  <h3>Call Us</h3>
                  <p>{this.props.number}</p>
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
                <ContactForm onSubmit={this.sendEmail} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { info: state.info };
};

export default connect(mapStateToProps, { sendEmail })(
  ContactPage
);
