import React from "react";
import { Button, Container } from "reactstrap";

const containerStyle = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center'
}

function LandingSection() {
  const pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth <= 990) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const handleKnowMore = () => {
    const ourServices = document.querySelector('#flinders-station');
    if (ourServices) {
      window.scrollTo(0, ourServices.offsetTop - 50)
    }
  };

  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url(${require("../../assets/images/hero-bg.jpg")})`
        }}
        className="page-header"
        data-parallax={false}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container style={containerStyle}>
          <div className="motto">
            <h1
              style={{ color: "#edf3a4", fontSize: "2.6em", fontWeight: 500 }}
            >
              Specialising in heritage window restorations
            </h1>
            <h4 style={{ color: "#edf3a4", fontSize: "1.35em" }}>
              Total Window Services are leading window and glass suppliers for
              commercial building and renovation projects in Victoria. Not only
              will we source and deliver the right high-quality products for
              your project but we also offer professional window installations,
              repairs and replacement services for all industries, commercial
              properties and heritage site
            </h4>
            <br />
            {/* <Button
              className="btn-round mr-1"
              color="default"
              type="button"
              outline
              onClick={handleVideoClick}
            >
              <i className="fa fa-play" />
              Watch video
            </Button> */}
            <Button
              className="btn-round"
              color="default"
              type="button"
              outline
              onClick={handleKnowMore}
            >
              Know more
            </Button>
          </div>
          <div className="bg-video">
            <video
              width="100%"
              height="100%"
              src={require("../../assets/videos/Flinders-Station-Restoration-reduced.m4v")}
              disablePictureInPicture
              controlsList={["nodownload"]}
              autoPlay
              muted
              loop
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingSection;
