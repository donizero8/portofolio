import { useState, useEffect } from 'react';

import Greet from "./components/Greet/Greet";

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
      <section id="about" className="s-about target-section">

        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={process.env.PUBLIC_URL + "/images/avatars/dony.jpg"} alt="" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
              My name is Dony Wijaya I'm a Web Developer based in Jakarta 🇮🇩.
              I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.

              Also I enjoy writing technical things ✍️ at my blog.
            </p>

            <hr />

            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>

                <p>
                  Dony Wijaya <br />
                  Kab. Bogor, Jawa Barat 16920 INA <br /><br />
                  <a href="tel:+6281319268819">+62 813 1926 8819</a> <br />
                  <a href="mailto:donywijaya221092@gmail.com">donywijaya221092 @gmail.com</a>
                </p>

              </div>
              <div className="column w-1000-stack">
                <a href="#0" className="btn btn--download">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div >
  );
}

export default App;
