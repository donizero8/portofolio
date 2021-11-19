import { useState, useEffect } from 'react';

import Greet from "./components/Greet/Greet";

function App() {
  const [isShowNav, setShowNav] = useState(false);
  const [currentNav, setcurrentNav] = useState("greet")

  useEffect(() => {
    const aboutTopOffset = document.getElementById('about').offsetTop;
    if (window.location.hash.length) {
      console.log(window.location.hash)
    }

    document.addEventListener("scroll", () => {
      const scrollTopPos = window.scrollY;
      console.log(scrollTopPos);
      const scrollCheck = scrollTopPos > aboutTopOffset - 1;

      if (scrollCheck !== isShowNav) {
        setShowNav(scrollCheck);
        if (scrollTopPos >= aboutTopOffset) {
          setcurrentNav('about');
        } else {
          setcurrentNav('greet');
        }
      }
    })
  });

  return (
    <div>
      <header className={`s-header ${isShowNav ? "sticky offset scrolling" : ""}`}>
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className={currentNav === "greet" ? "current" : ""}><a href="#greet">Home</a></li>
              <li className={currentNav === "about" ? "current" : ""}><a href="#about">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Say Hello</a></li>
            </ul>
          </nav>
        </div>

        <a className="s-header__menu-toggle" href="#0" title="Menu">
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
              My name is Dony Wijaya I'm a Web Developer based in Jakarta ☀️.
              I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.

              Also I enjoy writing technical things ✍️ at my blog.
            </p>

            <hr />

            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>

                <p>
                  Dony Wijaya <br />
                  Kab. Bogor, Jawa Barat 16920 INA <br />
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

    </div>
  );
}

export default App;
