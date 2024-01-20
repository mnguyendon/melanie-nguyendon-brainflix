import "./WriteComment.scss";
import commentsAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentImg from "../../assets/icons/add_comment.svg";
import { useState } from "react";

function WriteComment() {
  return (
    <section className="writeComment">
      <h2 className="writeComment__title">3 Comments</h2>
      <div className="writeComment__wrapper">
        <img className="writeComment__avatar" src={commentsAvatar} />
        <div className="writeComment__new">
          <form className="writeComment__form">
            <label className="writeComment__container-label" for="userComment">
              JOIN THE CONVERSATION
            </label>
            <div className="writeComment__container">
              <textarea
                className="writeComment__container-textarea"
                name="userComment"
                id="userComment"
                placeholder="Add a new comment"
                autocomplete="#"
                required
              ></textarea>
              <button className="writeComment__button" type="submit">
                <img className="writeCommentImg" src={commentImg} />
                COMMENT
              </button>
            </div>
          </form>
          <div id="writeComment__box"></div>
        </div>
      </div>
    </section>
  );
}

export default WriteComment;
