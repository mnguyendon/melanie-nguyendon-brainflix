import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import WriteComment from "./components/WriteComment/WriteComment";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <>
      <Header />
      <Video />
      <VideoInfo />
      <WriteComment />
      <Comments />
    </>
  );
}

export default App;
