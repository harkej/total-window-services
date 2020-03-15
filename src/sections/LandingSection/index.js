import React from "react";
import { Button, Container } from "reactstrap";

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

  const handleVideoClick = () => {
    console.log("playing video");
  };

  const handleKnowMore = () => {
    console.log("Know more");
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("../../assets/images/hero-bg.jpg")})`
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 style={{color: '#edf3a4'}}>Specialising in heritage window restorations</h1>
            <h4 style={{color: '#edf3a4'}}>
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
        </Container>
      </div>
    </>
  );
}

export default LandingSection;
