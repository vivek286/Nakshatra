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
                            <img src="/social/twitter.png" alt="" />
                            <img src="/social/twitter.png" alt="" />
                            <img src="/social/twitter.png" alt="" />
                            <img src="/social/twitter.png" alt="" />
                            <img src="/social/twitter.png" alt="" />
                            <img src="/social/twitter.png" alt="" />
                            <img src="/social/twitter.png" alt="" />
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
            </footer>
            <div className={classes.footer_text}>
                <p> <span>Copyright © 2022 All rights reserved</span><span className={classes.bar}> | </span><span>MU-GDSC Team ❤️</span></p>
                <p>🔴 Terms &#38; Conditions</p>
            </div>
        </>

    )
}
export default Footer;