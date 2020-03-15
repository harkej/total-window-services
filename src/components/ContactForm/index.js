import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
import { ReCaptcha } from "react-recaptcha-google";

const styles = {
  rowStyle: {
    marginTop: "20px"
  }
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [displayCaptcha, setDisplayCaptcha] = useState(!!window.grecaptcha);
  const captchaRef = useRef();

  useEffect(() => {
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  }, []);

  const onLoadRecaptcha = () => {
    console.log('Loaded recaptcha');
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  };

  const verifyCallback = recaptchaToken => {
    console.log(recaptchaToken, "<= your recaptcha token");
  };

  return (
    <Container style={{marginTop: '40px'}}>
      <h3>Get in touch</h3>
      <Form>
        <Row style={styles.rowStyle}>
          <Col>
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Col>
          <Col>
            <label htmlFor="phone">Phone</label>
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
            <label htmlFor="message">Message</label>
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
                <Button style={{marginTop: '20px'}} className="btn-round" color="default" type="button" outline>
                  Submit
                </Button>
            </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
