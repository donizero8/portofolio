export default function AboutMe() {
    return (
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
    )
}