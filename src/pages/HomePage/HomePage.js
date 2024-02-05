import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import HeroInfo from "../../components/HeroInfo/HeroInfo";
import WriteComment from "../../components/WriteComment/WriteComment";
import Comments from "../../components/Comments/Comments";
import VideoSection from "../../components/VideoSection/VideoSection";
import axios from "axios";

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoData, setVideoData] = useState([]);
  const { videoId } = useParams();

  const apiUrl = "http://localhost:5050/videos";
  const apiKey = "7e59c90a-a11c-46bd-bf15-8f4752e0391f";

  const videoListInfo = async () => {
    try {
      const response = await axios.get(`${apiUrl}?api_key=${apiKey}`);
      const data = response.data;
      setVideoData(data);
      return data;
    } catch (error) {
      console.error("error fetching video details", error);
    }
  };

  const heroVideoDetails = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/${id}?api_key=${apiKey}`);
      const data = response.data;
      setCurrentVideo(data);
    } catch (error) {
      console.error("error fetching video details", error);
    }
  };

  useEffect(() => {
    videoListInfo();
    if (videoId) {
      heroVideoDetails(videoId);
    } else {
      heroVideoDetails(videoData[0]?.id);
    }
  }, [videoId, videoData]);

  return (
    <>
      {currentVideo && currentVideo.comments && (
        <main>
          <Hero currentVideo={currentVideo} />
          <div className="homepage__container">
            <div>
              <HeroInfo currentVideo={currentVideo} />
              <WriteComment currentVideo={currentVideo} />
              <Comments currentVideo={currentVideo} />
            </div>
            <VideoSection videoData={videoData} currentVideo={currentVideo} />
          </div>
        </main>
      )}
    </>
  );
}

export default HomePage;
