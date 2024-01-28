import "./UploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();

  function handleClick() {
    alert("Upload successful");
    navigate("/");
  }

  return (
    <>
      <section className="uploads">
        <h1 className="uploads__title">Upload Video</h1>
        <form className="uploads__form">
          <div className="uploads__container">
            <label className="uploads__container-label" for="userName">
              VIDEO THUMBNAIL
            </label>
            <img src={thumbnail} className="uploads__thumbnail" />
          </div>
          <div className="uploads__container">
            <label className="uploads__container-label" for="userName">
              TITLE YOUR VIDEO
            </label>
            <input
              className="uploads__container-textarea uploads-container-name"
              name="userName"
              id="userName"
              placeholder="Add a title to your video"
              required
            />
          </div>
          <div className="uploads__container">
            <label className="uploads__container-label" for="userComment">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="uploads__container-textarea uploads__container-comments"
              name="userComment"
              id="userComment"
              placeholder="Add a description to your video"
              required
            ></textarea>
          </div>

          <div className="uploads__container uploads__container-button">
            <button
              className="uploads__button"
              type="submit"
              onClick={handleClick}
            >
              PUBLISH
            </button>
            <button className="uploads__cancel-button" type="submit">
              CANCEL
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default UploadPage;
