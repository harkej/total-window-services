import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor("navbar-primary");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const handleNavigate = (e, elementId) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.querySelector(elementId);
    if (element) {
      window.scrollTo(0, element.offsetTop - 60);
    }
    toggleNavbarCollapse();
  };

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="#home"
            target=""
            title="Total Window Services"
          >
            <Logo />
            Total Window Services
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink href="#home" onClick={e => handleNavigate(e, '#home')}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about-us" onClick={e => handleNavigate(e, '#about-us')}>
                About us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#our-services" onClick={e => handleNavigate(e, '#our-services')}>
                Our Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact-us" onClick={e => handleNavigate(e, '#contact-us')}>
                Contact us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
