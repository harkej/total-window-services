import React from "react";
import { Button, Container } from "reactstrap";
import useWindowSize from "../../hooks/useWindowSize";

function LandingSection() {
  const pageHeader = React.createRef();
  const { width } = useWindowSize();

  // React.useEffect(() => {
  //   if (window.innerWidth <= 990) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });

  const handleKnowMore = () => {
    const ourServices = document.querySelector("#flinders-station");
    if (ourServices) {
      window.scrollTo(0, ourServices.offsetTop - 50);
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: width > 600 ? "flex-end" : "center",
    height: '80vh',
    paddingLeft: 0,
  };

  return (
    <>
      <div
        id="home"
        // style={{
        //   backgroundImage: `url(${require("../../assets/images/hero-bg.jpg")})`
        // }}
        className="page-header"
        ref={pageHeader}
      >
        <div className="filter" />
        <Container style={containerStyle}>
          <div className="motto">
            <h1
              style={{ color: "#F1DAB2", fontSize: "2.4em", fontWeight: 700 }}
            >
              Specialising in heritage window restorations
            </h1>
            <h4
              style={{
                color: "#F1DAB2",
                fontSize: "1.35em",
                lineHeight: "1.45em",
                fontWeight: 500
              }}
            >
              Total Window Services are leading window and glass suppliers for
              commercial building and renovation projects in Victoria. Not only
              will we source and deliver the right high-quality products for
              your project but we also offer professional window installations,
              repairs and replacement services for all industries, commercial
              properties and heritage site
            </h4>
            <br />
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
        <div className="bg-video">
          <video
            width="100%"
            height="100%"
            src={require("../../assets/videos/bg-video.m4v")}
            disablePictureInPicture
            controlsList={["nodownload"]}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </>
  );
}

export default LandingSection;
