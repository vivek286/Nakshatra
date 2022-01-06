import classes from './Sponsors.module.css';

const Sponsors = () => {
    return (
        <section className={classes.sponsors} id="Sponsors">
            <h2>Sponsors</h2>
            <div className={classes.sponsors_conatiner}>
                <div className={classes.sponsors_subheading}>
                    <p>Interested in sponsoring Nakshatra?</p>
                    <p>Send us the mail <a href="mailto:mugdsc@gmail.com" target="_blank" rel="noopener noreferrer">mugdsc@gmail.com</a> </p>
                </div>
                <div className={classes.sponsors_details}>
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <img src="/sponsors/star.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            <img src="/sponsors/google.svg" alt="Google" />
                            <img src="/sponsors/amazon.svg" alt="Google" />
                            <img src="/sponsors/tesla.svg" alt="Google" />
                        </div>
                    </div>
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <img src="/sponsors/star.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            <img src="/sponsors/google.svg" alt="Google" />
                            <img src="/sponsors/amazon.svg" alt="Google" />
                            <img src="/sponsors/tesla.svg" alt="Google" />
                        </div>
                    </div>
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <img src="/sponsors/star.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            <img src="/sponsors/google.svg" alt="Google" />
                            <img src="/sponsors/amazon.svg" alt="Google" />
                            <img src="/sponsors/tesla.svg" alt="Google" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Sponsors;