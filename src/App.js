import { useState } from "react";
import "./App.scss";
import videoInfoData from "./data/video-details.json";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import WriteComment from "./components/WriteComment/WriteComment";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoInfoData[0]);

  const alterVideo = (videoObject) => {
    setCurrentVideo(videoObject);
  };
  return (
    <>
      <Header />
      <main>
        <Video currentVideo={currentVideo} />
        <div className="app__container">
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

export default App;
