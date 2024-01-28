import React from "react";
import "./VideoSection.scss";
import Video from "../Video/Video";

const VideoSection = ({ currentVideo, videoData }) => {
  const filteredVideos = videoData.filter(
    (video) => video.id !== currentVideo.id
  );

  return (
    <section className="videoSection">
      <h2 className="videoSection__title">NEXT VIDEOS</h2>
      <Video currentVideo={currentVideo} videoData={filteredVideos} />
    </section>
  );
};

export default VideoSection;
