import React from "react";
import "./NextVideos.scss";
import videoInfoData from "../../data/video-details.json";

const NextVideos = ({ currentVideo, alterVideo }) => {
  return (
    <section className="nextVideo">
      <h2 className="nextVideo__title">NEXT VIDEOS</h2>
      <div className="nextVideo__container">
        {videoInfoData.map(
          (video) =>
            currentVideo.title !== video.title && (
              <div
                className="nextVideo__subContainer"
                key={video.title}
                onClick={() => alterVideo(video)}
              >
                <video
                  className="nextVideo__video"
                  poster={video.image}
                ></video>
                <div className="nextVideo__info">
                  <h3 className="nextVideo__videoTitle">{video.title}</h3>
                  <p className="nextVideo__channel">{video.channel}</p>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default NextVideos;
