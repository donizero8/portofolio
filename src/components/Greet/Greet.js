const svgStyle = {
    fill: 'rgba(0, 0, 0, 1)',
    transform: '-ms-filter',
};

export default function Greet() {
    return (
        <section id="greet" className="s-hero target-section">

            <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

            <div className="row s-hero__content">
                <div className="column">

                    <div className="s-hero__content-about animated">


                        <h1 id="intro"><span>Hello, </span>I'm Dony.</h1>

                        <h3>
                            I am a <span>Web developer</span> with industry experience building websites and web applications.
                            I specialize in <span>Python (Django/Flask)</span>, <span>JavaScript (React.js)</span> and have professional experience working with <span>Go</span> and <span>PHP</span>.
                            Let's <a className="smoothscroll" href="#about"> start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.
                        </h3>

                        <div className="s-hero__content-social">
                            {/* <a href="#0"><i className="fab fa-facebook-square" aria-hidden="true"></i></a>
                            <a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                            <a href="#0"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                            <a href="#0"><i className="fab fa-dribbble" aria-hidden="true"></i></a>
                            <a href="#0"><i className="fab fa-behance" aria-hidden="true"></i></a>*/}
                            <a href="https://github.com/donizero8" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/dony-wijaya22/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>

                    </div>

                </div>
            </div>

            <div className="s-hero__scroll">
                <a href="#about" className="s-hero__scroll-link smoothscroll">
                    <span className="scroll-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={svgStyle}>
                            <path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path>
                        </svg>
                    </span>
                    <span className="scroll-text">Scroll Down</span>
                </a>
            </div>
        </section>
    )
}
