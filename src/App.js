import { useState, useEffect } from 'react';

import Greet from "./components/Greet/Greet";
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  const [offset, setOffset] = useState(0);
  const [isShowNav, setShowNav] = useState(false);
  const [currentNav, setcurrentNav] = useState("greet");
  const [toggleMenu, setToggleMenu] = useState(false)

  document.addEventListener("scroll", () => {
    console.log("scroll")
    setOffset(window.scrollY)
    if (toggleMenu) {
      setToggleMenu(false)
    }
  })

  // Side effect offset
  useEffect(() => {
    if (offset) {
      console.log("side effect offset")
      const aboutTopOffset = document.getElementById('about').offsetTop;

      const scrollCheck = offset >= aboutTopOffset;

      if (scrollCheck !== isShowNav) {
        setShowNav(scrollCheck);
        if (offset >= aboutTopOffset) {
          setcurrentNav('about');
        } else {
          setcurrentNav('greet');
        }
      }

    }
  }, [offset, isShowNav]);

  // Side effect toggle mobile nav
  useEffect(() => {
    console.log("side effect toggle")
    const navMobile = document.querySelector("#top")

    if (toggleMenu) {
      navMobile.classList.add("menu-is-open");
    } else {
      navMobile.classList.remove("menu-is-open");
    }
  }, [toggleMenu])

  return (
    <div>
      <header className={`s-header ${isShowNav ? "sticky offset scrolling" : ""}`}>
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className={currentNav === "greet" ? "current" : ""}><a href="#greet">Home</a></li>
              <li className={currentNav === "about" ? "current" : ""}><a href="#about">About</a></li>
              {/* <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Say Hello</a></li> */}
            </ul>
          </nav>
        </div>

        <a className={`s-header__menu-toggle ${toggleMenu ? "is-clicked" : ''}`} href="#0" onClick={(e) => { setToggleMenu(!toggleMenu); e.preventDefault(); }} title="Menu">
          <span className="s-header__menu-icon"></span>
        </a>
      </header>

      {/* Main =========  */}
      <Greet />

      {/* About ======== */}
      <AboutMe />

    </div >
  );
}

export default App;
