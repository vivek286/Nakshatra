import classes from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer id="Contact" className={classes.contact}>
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
                            <img src="/social/map.svg" alt="" />
                            <p> <a href="#">Medi-Caps University Indore</a></p>
                        </div>
                        <div className={classes.contact_links}>
                            <img src="/social/gmail.svg" alt="" />
                            <p><a href="#"> mugdsc@gmail.com</a></p>

                        </div>
                    </div>
                </div>
            </footer>
            <div className={classes.footer_text}>
                <p> <span>Copyright © 2022 All rights reserved</span><span className={classes.bar}> | </span><span>MU-GDSC Team ❤️</span></p>
                <p>🔴 Terms &#38; Conditions</p>
            </div>
        </>

    )
}
export default Footer;