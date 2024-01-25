import { useState } from "react";
import "./HomePage.scss";
import videoInfoData from "../../data/video-details.json";
import Hero from "../../components/Hero/Hero";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import WriteComment from "../../components/WriteComment/WriteComment";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState(videoInfoData[0]);

  const alterVideo = (videoObject) => {
    setCurrentVideo(videoObject);
  };

  return (
    <>
      <main>
        <Hero currentVideo={currentVideo} />
        <div className="homepage__container">
          <div>
            <VideoInfo currentVideo={currentVideo} />
            <WriteComment currentVideo={currentVideo} />
            <Comments currentVideo={currentVideo} />
          </div>
          <NextVideos currentVideo={currentVideo} alterVideo={alterVideo} />
        </div>
      </main>
    </>
  );
}

export default HomePage;
