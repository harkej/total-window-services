import React from "react";

const VideoSection = () => {
  return (
    <div className="video-section-container">
      <h2 style={{ color: "#277647", marginBottom: "32px", fontWeight: 300 }}>
        Restoring Flinders St Station{" "}
      </h2>
      <video
        controls
        src={require("../../assets/videos/Flinders-Station-Restoration-reduced.m4v")}
        disablePictureInPicture
        controlsList={["nodownload"]}
      />
    </div>
  );
};

export default VideoSection;
