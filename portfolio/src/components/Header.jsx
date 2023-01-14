import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Ankith Deekollu's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">       
          <h2>
            Hi I'm Ankith a Full Stack Developer who loves to build web applications!
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Header;