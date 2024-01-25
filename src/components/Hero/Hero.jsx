import "./Hero.scss";
import { useParams } from "react-router-dom";

function Hero({ currentVideo }) {
  // const params = useParams();

  // console.log("Params", params);

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

export default Hero;
