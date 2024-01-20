import "./VideoInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import { useState } from "react";

function VideoInfo() {
  return (
    <section className="videoInfo">
      <h1 className="videoInfo__title">BMX Rampage: 2021 Highlights</h1>
      <div className="videoInfo__specifics">
        <div className="videoInfo__specifics-static">
          <h2 className="videoInfo__author videoInfo__item">By Red Cow</h2>
          <p className="videoInfo__date videoInfo__item">07/11/2021</p>
        </div>
        <div className="videoInfo__specifics-dynamic">
          <div className="videoInfo__container">
            <img
              className="videoInfo__image"
              src={viewsIcon}
              alt="views icon"
            />
            <p className="videoInfo__views videoInfo__item">views</p>
          </div>
          <div className="videoInfo__container">
            <img
              className="videoInfo__image"
              src={likesIcon}
              alt="likes icon"
            />
            <p className="videoInfo__likes videoInfo__item">likes</p>
          </div>
        </div>
      </div>
      <p className="videoInfo__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
    </section>
  );
}

export default VideoInfo;
