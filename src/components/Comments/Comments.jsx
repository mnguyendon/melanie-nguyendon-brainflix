import "./Comments.scss";
import { useState } from "react";

function Comments() {
  return (
    <section class="comments">
      <div className="comments__container">
        <div class="comments__icon"></div>
        <div class="comments__details">
          <div class="comments__info">
            <p class="comments__name">Michael Lyons</p>
            <p class="comments__date">08/09/2021</p>
          </div>
          <p class="comments__comment">
            They BLEW the ROOF off at their last event, once everyone started
            figuring out they were going. This is still simply the greatest
            opening of an event I have EVER witnessed.
          </p>
        </div>
      </div>
      <div className="comments__container">
        <div class="comments__icon"></div>
        <div class="comments__details">
          <div class="comments__info">
            <p class="comments__name">Gary Wong</p>
            <p class="comments__date">07/15/2021</p>
          </div>
          <p class="comments__comment">
            Every time I see him shred I feel so motivated to get off my couch
            and hop on my board. He’s so talented! I wish I can ride like him
            one day so I can really enjoy myself!
          </p>
        </div>
      </div>
      <div className="comments__container">
        <div class="comments__icon"></div>
        <div class="comments__details">
          <div class="comments__info">
            <p class="comments__name">Theodore Duncan</p>
            <p class="comments__date">07/11/2021</p>
          </div>
          <p class="comments__comment">
            How can someone be so good!!! You can tell he lives for this and
            loves to do it every day. Everytime I see him I feel instantly
            happy! He’s definitely my favorite ever!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Comments;
