import classes from './Judges.module.css';

const Judges = () => {
    return (
        <section className={classes.judges}>
            <h2>Judges</h2>
            <div className={classes.judges_container}>
                <div className={classes.card}>
                    <div className={classes.card_img}>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className={classes.card_details}>
                        <p className={classes.name}>Coming Soon...</p>
                        <p className={classes.org}>MU-GDSC</p>
                        <p className={classes.designation}>Lead</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.card_img}>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className={classes.card_details}>
                        <p className={classes.name}>Coming Soon...</p>
                        <p className={classes.org}>MU-GDSC</p>
                        <p className={classes.designation}>Lead</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.card_img}>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className={classes.card_details}>
                        <p className={classes.name}>Coming Soon...</p>
                        <p className={classes.org}>MU-GDSC</p>
                        <p className={classes.designation}>Lead</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Judges;