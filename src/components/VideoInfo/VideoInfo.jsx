import "./VideoInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import { formatTimestamp } from "../../utils/utils";

function VideoInfo({ currentVideo }) {
  return (
    <section className="videoInfo">
      <h1 className="videoInfo__title">{currentVideo.title}</h1>
      <div className="videoInfo__specifics">
        <div className="videoInfo__specifics-static">
          <h2 className="videoInfo__author videoInfo__item">
            {currentVideo.channel}
          </h2>
          <p className="videoInfo__date videoInfo__item">
            {formatTimestamp(currentVideo.timestamp)}
          </p>
        </div>
        <div className="videoInfo__specifics-dynamic">
          <div className="videoInfo__container">
            <img
              className="videoInfo__image"
              src={viewsIcon}
              alt="views icon"
            />
            <p className="videoInfo__views videoInfo__item">
              {currentVideo.views}
            </p>
          </div>
          <div className="videoInfo__container">
            <img
              className="videoInfo__image"
              src={likesIcon}
              alt="likes icon"
            />
            <p className="videoInfo__likes videoInfo__item">
              {currentVideo.likes}
            </p>
          </div>
        </div>
      </div>
      <p className="videoInfo__description">{currentVideo.description}</p>
    </section>
  );
}

export default VideoInfo;
