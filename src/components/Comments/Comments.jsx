import "./Comments.scss";
import { formatTimestamp } from "../../utils/utils";

function Comments({ currentVideo }) {
  return (
    <section className="comments">
      {currentVideo.comments?.map((comment, index) => (
        <div className="comments__container" key={index}>
          <div className="comments__icon"></div>
          <div className="comments__details">
            <div className="comments__info">
              <p className="comments__name">{comment.name}</p>
              <p className="comments__date">
                {formatTimestamp(comment.timestamp)}
              </p>
            </div>
            <p className="comments__comment">{comment.comment}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Comments;
