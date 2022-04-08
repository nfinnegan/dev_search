import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div>
      <nav className="App-header" id="app_title">
        dev_search
      </nav>
      <header className="intro container-fluid">
        <div>
          <h1 className="landing_page_text">Looking for programmers?</h1>
          <p className="landing_page_text">
            Search potential candidates based on language tags on their Github
            repos!
          </p>
        </div>
        <div>
          <img
            id="intro_image"
            src="/assets/intro_image.png"
            alt="cartoonImage_guy_at_computer"
          ></img>
        </div>
      </header>
    </div>
  );
};

export default Header;
