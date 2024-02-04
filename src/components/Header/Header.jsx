import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <div className="header__logo">
          <Link to={`/`} className="header__link">
            <img className="header__logo-img" alt="brainflix logo" src={logo} />
          </Link>
        </div>
        <div className="header__search">
          <form className="header__form">
            <input
              className="header__searchbar"
              type="text"
              placeholder="Search"
            ></input>
          </form>
          <img
            alt="user profile photo"
            src={avatarImage}
            className="header__avatar"
          />
        </div>
        <div className="header__button-container">
          <Link to={`/upload`} className="header__upload-link">
            <button type="submit" className="header__button">
              UPLOAD
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
