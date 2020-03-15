import React from "react";
import CustomMap from "../../components/CustomMap";
import "./style.css";
import ContactForm from "../../components/ContactForm";
import { Card } from "reactstrap";
import { ReactComponent as Landline } from "../../assets/images/landline.svg";
import { ReactComponent as Mobile } from "../../assets/images/mobile.svg";
import { ReactComponent as Fax } from "../../assets/images/fax.svg";

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
    color: "#fff",
    marginLeft: ' '
  }
};

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-message">
        <p>
          We service clients Victoria-wide. If you’d like to learn more about
          any of our commercial window services, to receive a free quote or to
          discuss your upcoming building project in more detail, contact our
          team today.
        </p>
      </div>
      <div className="contact-us-container">
        <Card body inverse style={styles.cardStyle}>
          <div className="contact-details">
            <p style={styles.contactDetailsTitle}>Contact us</p>
            <p style={styles.contactText}>Total Window Services Pty Ltd</p>
            <p style={styles.contactText}>
              <Landline />
              <a
                className="contact-link"
                href="tel:0393316515"
                style={styles.highlightText}
              >
                03 9331 6515{" "}
              </a>
            </p>
            <p style={styles.contactText}>
              <Fax />
              <span href="fax:0393316530" style={styles.highlightText}>
                03 9331 6530{" "}
              </span>
            </p>
            <p style={styles.contactText}>
              <Mobile />
              <a
                className="contact-link"
                href="tel:0411475331"
                style={styles.highlightText}
              >
                0411 475 331
              </a>
            </p>
            <p style={styles.contactText}>
              <a
                style={styles.contactText}
                className="contact-link"
                href="mailto:office@totalwindows.com.au"
              >
                office@totalwindows.com.au
              </a>
            </p>
            <p style={styles.contactText}>
              <a
                className="contact-link"
                href="www.totalwindows.com.au"
                target="_blank"
                style={styles.contactText}
              >
                www.totalwindows.com.au
              </a>
            </p>
          </div>
          <div className="contact-details" style={{ marginTop: "20px" }}>
            <p style={styles.contactDetailsTitle}>Hours</p>
            <p style={styles.contactText}>Monday to Friday: 9am - 5pm</p>
            <p style={styles.contactText}>Saturday and Sunday: Closed</p>
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
