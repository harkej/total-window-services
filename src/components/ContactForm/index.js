import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
import { ReCaptcha } from "react-recaptcha-google";

const styles = {
  rowStyle: {
    marginTop: "20px"
  },
  headerStyle: {
    margin: 0,
    fontWeight: 500
  },
  labelStyle: {
    fontWeight: 500
  },
  textDanger: {
    color: 'red !important'
  }
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitEnabled, setSubmitEnabled] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const captchaRef = useRef();

  useEffect(() => {
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  }, []);

  useEffect(() => {
    if (name && email && phone && message && recaptchaToken) {
      setSubmitEnabled(true);
    } else {
      setSubmitEnabled(false);
    }
  }, [name, email, phone, message, recaptchaToken]);

  const onLoadRecaptcha = () => {
    console.log("Loaded recaptcha");
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  };

  const verifyCallback = recaptchaToken => {
    setRecaptchaToken(recaptchaToken);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container style={{ marginTop: "10px", color: "#edf3a4" }} className="contact-form-container">
      <h3 style={styles.headerStyle}>Get in touch</h3>
      <Form onSubmit={handleSubmit}>
        <Row style={styles.rowStyle}>
          <Col>
            <label htmlFor="name" style={styles.labelStyle}>
              Name
              <span className="text-danger"> *</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={styles.rowStyle}>
          <Col>
            <label htmlFor="email" style={styles.labelStyle}>
              Email
              <span className="text-danger"> *</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Col>
          <Col>
            <label htmlFor="phone" style={styles.labelStyle}>
              Phone
              <span className="text-danger"> *</span>
            </label>
            <Input
              id="phone"
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={e => {
                const { value } = e.target;
                if (value === "" || /^[0-9\b]+$/.test(value)) {
                  setPhone(value);
                }
              }}
            />
          </Col>
        </Row>
        <Row style={styles.rowStyle}>
          <Col>
            <label htmlFor="message" style={styles.labelStyle}>
              Message
              <span className="text-danger"> *</span>
            </label>
            <Input
              id="message"
              type="textarea"
              placeholder="Enter your message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={styles.rowStyle}>
          <Col>
            {window.grecaptcha && window.grecaptcha.ready ? (
              <ReCaptcha
                ref={captchaRef}
                size="normal"
                render="explicit"
                sitekey="6LeGY-EUAAAAAFSgnCaj8VNDEeRCdkmPbxlvzY7y"
                onLoad={onLoadRecaptcha}
                verifyCallback={verifyCallback}
              />
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              style={{ marginTop: "20px" }}
              className="btn btn-contact-form"
              color="default"
              type="button"
              outline
              onClick={handleSubmit}
              disabled={!isSubmitEnabled}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
