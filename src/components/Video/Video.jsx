import React from "react";
import "./Video.scss";
import { Link } from "react-router-dom";

const Video = ({ videoData }) => {
  return (
    <section className="video">
      {videoData.map((video) => (
        <Link to={`/videos/${video.id}`} key={video.id}>
          <div className="video__container" key={video.id}>
            <video className="video__video" poster={video.image}></video>
            <div className="video__info">
              <h3 className="video__title">{video.title}</h3>
              <p className="video__channel">{video.channel}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Video;
