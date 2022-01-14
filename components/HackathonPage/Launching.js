import classes from './Launching.module.css';


const Launching = () => {



    return (
        <section className={classes.hackathon}>
            <h2>Launching In</h2>
            <div className={classes.countdown}>
                <div className={`${classes.countdown_timer} ${classes.countdown_days}`}>
                    <div className={classes.countdown_value}>
                        <p>24</p>
                    </div>
                    <div className={classes.countdown_unit}>
                        <p>Days</p>
                    </div>
                </div>
                <div className={`${classes.countdown_timer} ${classes.countdown_hour}`}>
                    <div className={classes.countdown_value}>
                        <p>24</p>
                    </div>
                    <div className={classes.countdown_unit}>
                        <p>Hours</p>
                    </div>
                </div>
                <div className={`${classes.countdown_timer} ${classes.countdown_min}`}>
                    <div className={classes.countdown_value}>
                        <p>24</p>
                    </div>
                    <div className={classes.countdown_unit}>
                        <p>Min</p>
                    </div>
                </div>
                <div className={`${classes.countdown_timer} ${classes.countdown_sec}`}>
                    <div className={classes.countdown_value}>
                        <p>24</p>
                    </div>
                    <div className={classes.countdown_unit}>
                        <p>Sec</p>
                    </div>
                </div>
            </div>
            <div className={classes.heading}>
                <h1>
                    Hackosphere
                </h1>
                <p>
                    Showcase your extraordinary problem solving skills
                    Fill up your prodigious mind with ingenious ideas
                    Hack up your sphere of innovation
                </p>
                <div
                    className="apply-button"
                    data-hackathon-slug="nakshatra"
                    data-button-theme="dark-inverted"
                    style={{ height: "44px", width: " 312px" }}
                ></div>
            </div>
        </section>
    )
}
export default Launching;