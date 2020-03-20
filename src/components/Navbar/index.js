import React, { useState } from "react";
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
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

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
    setActiveNav(elementId);
    const element = document.querySelector(elementId);
    if (element) {
      window.scrollTo(0, element.offsetTop - 60);
    }
    if (document.documentElement.clientWidth < 600) {
      toggleNavbarCollapse();
    }
  };

  const navList = [
    {
      id: 1,
      elementId: '#home',
      name: 'Home',
    },
    {
      id: 2,
      elementId: '#about-us',
      name: 'About us',
    },
    {
      id: 3,
      elementId: '#our-services',
      name: 'Our services',
    },
    {
      id: 4,
      elementId: '#contact-us',
      name: 'Contact us',
    },
  ];

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor, "navbar-width")}
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
            {navList.map(item => (
              <NavItem>
                <NavLink
                  key={item.id}
                  className={activeNav === item.elementId ? "active-nav" : ""}
                  href={item.elementId}
                  onClick={e => handleNavigate(e, item.elementId)}
                >
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
