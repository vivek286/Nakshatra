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
        </section>

    )
}
export default Contact;