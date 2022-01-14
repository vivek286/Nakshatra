import classes from './ContestItem.module.css';

const ContestItem = ({ title, description, image, topics, guidelines, prize1, prize2 }) => {
    return (
        <section className={classes.contestItem}>
            <div className={classes.level}>
                <div className={classes.level_details}>
                    <div className={classes.detail_head}>
                        <h2>{title}</h2>
                        <p className={classes.subheading}>{description}</p>
                    </div>
                </div>
                <div className={classes.card_container}>
                    <div className={classes.card}>
                        <img src={`/contests/${image}`} alt="Pallette" />
                    </div>
                    <div className={classes.btn_wrapper}>
                        <a href=""><button className={classes.btn}>Register</button></a>
                    </div>
                </div>
            </div>
            <div className={classes.contestDetails}>
                <div className={classes.detailSection}>
                    <h2>Topics</h2>
                    <ul>
                        {topics.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className={classes.detailSection}>
                    <h2>Guidelines</h2>
                    <ul>
                        {guidelines.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className={classes.prizes}>
                    <h2>Prizes</h2>
                    <div className={classes.prizes_container}>
                        <div className={classes.prize_card}>
                            <img src={`/contests/${prize1}`} alt="Prize 1" />
                        </div>
                        <div className={classes.prize_card}>
                            <img src={`/contests/${prize2}`} alt="Prize 1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContestItem;