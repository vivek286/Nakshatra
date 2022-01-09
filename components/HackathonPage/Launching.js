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
                    Sandali write some innovative types here, of two lines,
                    innovatiion, real problems blah blah
                </p>
                <a href="#"> <button className={classes.btn}>
                    Register
                </button></a>
            </div>
        </section>
    )
}
export default Launching;