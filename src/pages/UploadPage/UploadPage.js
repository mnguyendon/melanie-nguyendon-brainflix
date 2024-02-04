import React, { useRef } from "react";
import "./UploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadPage() {
  const navigate = useNavigate();
  const formRef = useRef();

  const handleClick = async (title, description) => {
    const res = await axios.post("http://localhost:5050/videos", {
      title,
      description,
    });

    return res.data;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const title = form.userTitle.value;
    const description = form.userUpload.value;

    handleClick(title, description).then((res) => console.log(res));
    alert("Upload successful");
    navigate("/");
  };

  return (
    <>
      <section className="uploads">
        <h1 className="uploads__title">Upload Video</h1>
        <form className="uploads__form" ref={formRef} onSubmit={submitForm}>
          <div className="uploads__wrap">
            <div className="uploads__container uploads__container-video">
              <label
                className="uploads__container-label uploads__thumbnail-title"
                htmlFor="userName"
              >
                VIDEO THUMBNAIL
              </label>
              <img
                alt="upload thumbnail"
                src={thumbnail}
                className="uploads__thumbnail"
              />
            </div>
            <div className="uploads__section">
              <div className="uploads__container">
                <label className="uploads__container-label" htmlFor="userTitle">
                  TITLE YOUR VIDEO
                </label>
                <input
                  className="uploads__container-textarea uploads-container-name"
                  name="userTitle"
                  id="userTitle"
                  placeholder="Add a title to your video"
                  required
                />
              </div>
              <div className="uploads__container">
                <label
                  className="uploads__container-label"
                  htmlFor="userUpload"
                >
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  className="uploads__container-textarea uploads__container-comments"
                  name="userUpload"
                  id="userUpload"
                  placeholder="Add a description to your video"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="uploads__container uploads__container-button">
            <button className="uploads__button" type="submit">
              PUBLISH
            </button>
            <button className="uploads__cancel-button" type="button">
              CANCEL
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default UploadPage;
