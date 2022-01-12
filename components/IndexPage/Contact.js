import classes from './Contact.module.css';

const Contact = () => {
    return (
        <section id="Contact" className={classes.contact}>
            <div>
                <div className={classes.social_media}>
                    <div className={classes.logo}>
                        <img src="/nakshatra.png" alt="Nakshatra" />
                    </div>
                    <div className={classes.social_media_logos}>
                        <div>
                            <img src="/social/instagram.svg" alt="Instagram Icon" />
                        </div>
                        <div>

                            <img src="/social/linkedin.svg" alt="LinkedIn Icon" />
                        </div>
                        <div>

                            <img src="/social/discord.svg" alt="Discord Icon" />
                        </div>
                        <div>

                            <img src="/social/telegram.svg" alt="Telegram Icon" />
                        </div>
                        <div>

                            <img src="/social/twitter.svg" alt="Twitter Icon" />
                        </div>
                        <div>

                            <img src="/social/youtube.svg" alt="Youtube Icon" />
                        </div>
                        <div>

                            <img src="/social/google.svg" alt="Google Icon" />
                        </div>
                    </div>
                </div>
                <div className={classes.contact_details}>
                    <h2>Contact Us</h2>
                    <div className={classes.contact_links}>
                        <img src="/social/map.png" alt="" />
                        <p> <a href="#">Medi-Caps University Indore</a></p>
                    </div>
                    <div className={classes.contact_links}>
                        <img src="/social/gmail.png" alt="" />
                        <p><a href="#"> mugdsc@gmail.com</a></p>

                    </div>
                </div>
            </div>
        </section>

    )
}
export default Contact;