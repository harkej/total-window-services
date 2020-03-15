import React from "react";
import { Container, Button } from "reactstrap";

const ContactRibbon = ({ message, action, history, title, className }) => {
  return (
    <Container className={`contact-ribbon ${className ?? ''}`}>
      {title && <p className="contact-ribbon-title">{title}</p>}
      <p className="contact-ribbon-message">
        <em>{message}</em>
      </p>
      {action && (
        <Button
          className="btn-round"
          color="primary"
          type="button"
          primary
          onClick={() => history.push("#contact-us")}
        >
          {action}
        </Button>
      )}
    </Container>
  );
};

export default ContactRibbon;
