import "./UploadPage.scss";
import publishImg from "../../assets/icons/publish.svg";

function UploadPage() {
  return (
    <>
      <section className="uploads">
        <h1 className="uploads__title">Upload Video</h1>
        <form className="uploads__form">
          <div className="uploads__container">
            <label className="uploads__container-label" for="userName">
              VIDEO THUMBNAIL
            </label>
            <img className="uploads__video-thumbnail" />
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
            <button className="uploads__button" type="submit">
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
