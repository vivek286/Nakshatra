import classes from './Callisto.module.css';
const Callisto = () => {
    return (
        <section className={classes.level}>
            <div className={classes.card_container}>
                <div className={classes.card}>
                    <img src="/contests/writing.png" alt="Pallette" />
                </div>
                <div className={classes.btn_wrapper}>
                    <a href=""><button className={classes.btn}>Register</button></a>
                </div>
            </div>
            <div className={classes.level_details}>
                <div className={classes.detail_head}>
                    <h2>CallistO</h2>
                    <p className={classes.subheading}>Writing up the technical content is the perfect combination in the field of study, and is a fabulous way of sharing the accumulated knowledge by giving it a theoretical perspective with an interesting touch.  (concluding line missing)</p>
                </div>

            </div>
        </section>
    )
}
export default Callisto;