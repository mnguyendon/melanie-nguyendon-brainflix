import "./Hero.scss";
import { useParams } from "react-router-dom";

function Hero({ currentVideo }) {
  return (
    <section className="hero">
      <video
        poster={currentVideo.image}
        controls
        className="hero__container"
      ></video>
    </section>
  );
}

export default Hero;
