import React from "react";
import { Container } from "reactstrap";
import * as IMG1 from "../../assets/images/about-us-1.jpg";
import * as IMG2 from "../../assets/images/about-us-2.jpg";
import * as IMG3 from "../../assets/images/about-us-3.jpg";

const AboutUs = () => {
  const images = [
    {
      id: 1,
      src: IMG1,
      name: "About us"
    },
    {
      id: 2,
      src: IMG2,
      name: "About us"
    },
    {
      id: 3,
      src: IMG3,
      name: "About us"
    },
  ];
  return (
    <Container style={{ padding: "40px 15px" }}>
      <div className="images-container">
        {images.map(item => (
            <div key={item.id} className="image-wrapper">
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.name}
                  style={{ width: "100%", height: "420px" }}
                />
            </div>
        ))}
      </div>
      <div className="about-us-container">
        <p className="about-us-title">Restoring our heritage since 1996</p>
        <p className="about-us-para">
          With over 20 years of experience in the industry, at Total Window
          Solutions we know exactly what we’re doing when it comes to window
          installations and restorations for commercial clients. We have served
          clients from all industries and have worked on heritage sites such as
          Flinders Street Station and the Palais Theatre.
        </p>
        <p className="about-us-para">
          Although we’ve been operating for over two decades and have expanded
          our business to cover commercial projects all around Victoria, we are
          proud to remain an owner operated, family business to this day
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
