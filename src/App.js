import { useState, useEffect } from 'react';

import Main from "./components/Main/Main";

function App() {
  const [isShowNav, setShowNav] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 835;
      // if scrollY > 850 then sticky navbar
      if (scrollCheck !== isShowNav) {
        setShowNav(scrollCheck);
      }
    })
  });

  return (
    <div>
      <header className={`s-header ${isShowNav ? "sticky offset scrolling" : ""}`}>
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current"><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
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
      <Main />

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
                  Villa Citayam Blok C5A No. 3, Jl. Duren Baru, Desa Susukan, Kec. Bojong Gede <br />
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
