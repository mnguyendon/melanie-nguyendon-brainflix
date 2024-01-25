import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <div className="header__logo">
          <a href="#" className="header__link">
            <img className="header__logo-img" alt="brainflix logo" src={logo} />
          </a>
        </div>
        <div className="header__search">
          <form className="header__form">
            <input
              className="header__searchbar"
              type="text"
              placeholder="Search"
            ></input>
          </form>
          <img src={avatarImage} className="header__avatar" />
        </div>
        <div className="header__button-container">
          <button type="submit" className="header__button">
            UPLOAD
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
