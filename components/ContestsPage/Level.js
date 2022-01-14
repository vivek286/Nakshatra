import classes from './Levels.module.css';

const Level = ({ title, date, time, duration }) => {
    return (
        <section className={classes.level}>
            <div className={classes.card_container}>
                <div className={classes.card}>
                    <div className={classes.card_top}>
                        <div className={classes.trophy}>
                            <img src="/contests/gold.png" alt="Gold Trophy" />
                            <p>tshirts, goodies internship certificate</p>
                        </div>
                    </div>
                    <div className={classes.card_bottom}>
                        <div className={classes.trophy}>
                            <div className={classes.trophy}>
                                <img src="/contests/silver.png" alt="Gold Trophy" />
                                <p>tshirts, goodies internship certificate</p>
                            </div>
                        </div>
                        <div className={classes.trophy}>
                            <div className={classes.trophy}>
                                <img src="/contests/bronze.png" alt="Gold Trophy" />
                                <p>tshirts, goodies internship certificate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.level_details}>
                <div className={classes.detail_head}>
                    <h2>{title}</h2>
                    <p className={classes.subheading}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi autem unde tempora quidem id voluptate officiis porro ducimus deserunt?</p>
                </div>
                <div className={classes.detail_bottom}>
                    <p>{date}</p>
                    <p>{time}</p>
                    <p>{duration}</p>
                </div>
                <div>
                    <a href=""><button className={classes.btn}>Register</button></a>
                </div>
            </div>
        </section>
    )
}
export default Level;