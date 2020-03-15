import React from "react";
import CustomMap from "../../components/CustomMap";
import "./style.css";
import ContactForm from "../../components/ContactForm";
import { Card } from "reactstrap";

const styles = {
  cardStyle: {
    backgroundColor: "#277647",
    maxWidth: document.documentElement.clientWidth > 600 ? "49.5%" : "100%",
    margin: "0 15px 10px"
  },
  contactDetailsTitle: {
    fontSize: "16px",
    margin: "15px 0",
    color: "#fff",
    fontWeight: 600,
    lineHeight: "10px",
    letterSpacing: "1px"
  },
  contactText: {
    fontSize: "14px",
    margin: "2px 0",
    color: "#fff",
    fontWeight: 400
  },
  highlightText: {
    fontWeight: 600,
    color: "#fff"
  }
};

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-message">
        <p>
          We service clients Victoria-wide. If you’d like to learn more about any
          of our commercial window services, to receive a free quote or to discuss
          your upcoming building project in more detail, contact our team today.
        </p>
      </div>
      <div className="contact-us-container">
        <Card body inverse style={styles.cardStyle}>
          <div className="contact-details">
            <p style={styles.contactDetailsTitle}>Contact us</p>
            <p style={styles.contactText}>Total Window Services Pty Ltd</p>
            <p style={styles.contactText}>
              ph <span style={styles.highlightText}>03 9331 6515 </span>fax{" "}
              <span style={styles.highlightText}>03 9331 6530 </span>
              mobile <span style={styles.highlightText}>0411 475 331</span>
            </p>
            <p style={styles.contactText}>office@totalwindows.com.au</p>
            <p style={styles.contactText}>www.totalwindows.com.au</p>
          </div>
          <div className="contact-details" style={{ marginTop: "20px" }}>
            <p style={styles.contactDetailsTitle}>Hours</p>
            <p style={styles.contactText}>Monday to Friday 9am-5pm</p>
            <p style={styles.contactText}>Saturday and Sunday CLOSED</p>
          </div>
          <div className="map-container">
            <CustomMap />
          </div>
        </Card>
        <Card body inverse style={styles.cardStyle}>
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </Card>
      </div>
    </>
  );
};

export default ContactUs;
