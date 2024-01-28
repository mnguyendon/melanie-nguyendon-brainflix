import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import UploadPage from "./pages/UploadPage/UploadPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
