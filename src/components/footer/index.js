import React from "react";
import { NavLink } from "reactstrap";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div
          className="logo-section"
          onClick={() => {
            const home = document.querySelector("#home");
            if (home) {
              window.scrollTo(0, home.offsetTop);
            }
          }}
        >
          <Logo />
          <div className="footer-container-section">Total Window Services</div>
        </div>
        <div>
          <p className="footer-social-title">Follow us on</p>
          <div className="footer-social-section">
            <NavLink
              data-placement="bottom"
              href="https://twitter.com/"
              target="_blank"
              title="Follow us on Twitter"
            >
              <i className="fa fa-twitter" />
            </NavLink>
            <NavLink
              data-placement="bottom"
              href="https://www.facebook.com/"
              target="_blank"
              title="Like us on Facebook"
            >
              <i className="fa fa-facebook-square" />
            </NavLink>
            <NavLink
              data-placement="bottom"
              href="https://www.instagram.com/"
              target="_blank"
              title="Follow us on Instagram"
            >
              <i className="fa fa-instagram" />
            </NavLink>
            <NavLink
              data-placement="bottom"
              href="https://www.linkedin.com/"
              target="_blank"
              title="Follow on LinkedIn"
            >
              <i className="fa fa-linkedin" />
            </NavLink>
            <NavLink
              data-placement="bottom"
              href="https://www.youtube.com/"
              target="_blank"
              title="Subscribe on YouTube"
            >
              <i className="fa fa-youtube" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © 2020 Copyright: www.totalwindows.com.au
      </div>
      <div className="powered-by">Powered by Melbourne Technology Solutions</div>
    </>
  );
};

export default Footer;
