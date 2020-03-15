import React from "react";
import HeritageSite from "../../assets/images/heritage-site.jpg";

const VideoSection = () => {
  return (
    <div className="video-section-container">
      <div className="video-desc-container">
        <div className="video-desc-details">
          <h2
            style={{
              color: "#edf3a4",
              marginBottom: "32px",
              fontWeight: 300,
              marginTop: 0
            }}
          >
            The Heritage Specialists{" "}
          </h2>
          <p className="video-desc">
            Heritage sites and buildings require the utmost precision and care
            when they are undergoing renovations or restorations. It’s important
            that historical features and architectural designs are not
            compromised and that you comply with your council laws. At Total
            Window Solutions, our specialty is heritage restorations, you can be
            confident that our experienced staff will always perform a quality
            service.
          </p>
          <p className="video-desc" style={{fontWeight: 500}}>
            View our work on the restoration of the historical Flinders Street
            Station in the video below.
          </p>
        </div>
        <div className="video-desc-image">
          <img src={HeritageSite} alt="Flinders St Station" />
        </div>
      </div>
      <div>
        <label className="video-title">Restoring Flinders St Station Documentary</label>
        <video
          controls
          src={require("../../assets/videos/Flinders-Station-Restoration-reduced.m4v")}
          disablePictureInPicture
          controlsList={["nodownload"]}
          title="Flinders St Station Documentary"
        />
      </div>
    </div>
  );
};

export default VideoSection;
