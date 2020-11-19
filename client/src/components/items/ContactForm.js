import React from "react";
import { Field, reduxForm } from "redux-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        messageSent: false
    }
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return <div>{error}</div>;
    }
  }

  renderInput = ({ input, placeholder, as, meta, rows }) => {
    return (
      <div>
        <Form.Control
          {...input}
          as={as}
          rows={rows}
          placeholder={placeholder}
          autoComplete="off"
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    this.setState({messageSent : true})
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Form.Row>
          <Form.Group className="col">
            <Field
              name="name"
              placeholder="Your Name"
              component={this.renderInput}
            />
          </Form.Group>
          <Form.Group className="col form-group">
            <Field
              name="email"
              placeholder="Your Email"
              component={this.renderInput}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Field
            name="subject"
            placeholder="Subject"
            component={this.renderInput}
          />
        </Form.Group>
        <Form.Group>
          <Field
            name="textarea"
            as="textarea"
            rows={5}
            placeholder="Your message"
            component={this.renderInput}
          />
        </Form.Group>
        <div className="text-center pt-3">
          {this.state.messageSent
            ? "Thank you! The message has been sent."
            : ""}
        </div>
        <div className="text-center pt-3">
          <Button type="submit" className="btn btn-danger">
            Send Message
          </Button>
        </div>
      </Form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must enter a name.";
  }

  if (!formValues.email) {
    errors.email = "You must enter a email.";
  }

  if (!formValues.subject) {
    errors.subject = "You must enter a subject.";
  }

  if (!formValues.textarea) {
    errors.textarea = "You must enter a message.";
  }

  return errors;
};

export default reduxForm({
  form: "contactForm",
  validate,
})(ContactForm);
