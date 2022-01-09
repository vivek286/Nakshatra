import classes from './Prizes.module.css';

const Prizes = () => {
    return (
        <section className={classes.prizes}>
            <h2>Prizes</h2>
            <div className={classes.prizes_container}>
                <div className={classes.prize_card}>
                    <img src="/gold-1.png" alt="" />
                </div>
                <div className={classes.prize_card}>
                    <img src="/silver-2.png" alt="" />
                </div>
                <div className={classes.prize_card}>
                    <img src="/bronze-3.png" alt="" />
                </div>
            </div>

        </section>
    )
}
export default Prizes;