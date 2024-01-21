import "./Video.scss";
import play from "../../assets/icons/play.svg";
import pause from "../../assets/icons/pause.svg";

function Video({ currentVideo }) {
  return (
    <section className="video">
      <video
        poster={currentVideo.image}
        controls
        className="video__container"
      ></video>
    </section>
  );
}

export default Video;
