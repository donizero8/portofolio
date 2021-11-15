function App() {
  return (
    <>
      <header className="s-header">
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
            </ul>
          </nav>
        </div>

        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon"></span>
        </a>
      </header>

      <section id="home" className="s-hero target-section">

        <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

        <div className="row s-hero__content">
          <div className="column">

            <div className="s-hero__content-about">

              <h1>I'm Dony Wijaya.</h1>

              <h3>
                I am a <span>Web developer</span> with industry experience building websites and web applications.
                I specialize in <span>Python (Django/Flask)</span>, <span>JavaScript (React.js)</span> and have professional experience working with <span>Go</span> and <span>PHP</span>.
                Let's <a className="smoothscroll" href="#about">start scrolling</a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.
              </h3>

              <div className="s-hero__content-social">
                {/* <a href="#0"><i className="fab fa-facebook-square" aria-hidden="true"></i></a>
                <a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="#0"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="#0"><i className="fab fa-dribbble" aria-hidden="true"></i></a>
                <a href="#0"><i className="fab fa-behance" aria-hidden="true"></i></a>*/}
                <a href="https://github.com/donizero8" target="_blank" rel="noreferrer" ><i className="fab fa-github" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/dony-wijaya22/" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin" aria-hidden="true"></i></a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
