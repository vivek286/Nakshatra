import classes from './Special-Prizes.module.css';

const SpecialPrizes = () => {
    return (
        <section className={classes.special_prizes}>
            <h2>Special Prizes</h2>
            <div className={classes.special_container}>
                <div className={classes.prize_card}>
                    <div className={classes.card_title}>
                        <p>Title</p>
                    </div>
                    <div className={classes.card_details}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit veniam quos impedit amet voluptatum magni autem, eius rem ratione temporibus, ab architecto quod laboriosam accusamus. Enim quos ullam obcaecati?</p>
                    </div>
                </div>
                <div className={classes.prize_card}>
                    <div className={classes.card_title}>
                        <p>Title</p>
                    </div>
                    <div className={classes.card_details}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit veniam quos impedit amet voluptatum magni autem, eius rem ratione temporibus, ab architecto quod laboriosam accusamus. Enim quos ullam obcaecati?</p>
                    </div>
                </div>
                <div className={classes.prize_card}>
                    <div className={classes.card_title}>
                        <p>Title</p>
                    </div>
                    <div className={classes.card_details}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit veniam quos impedit amet voluptatum magni autem, eius rem ratione temporibus, ab architecto quod laboriosam accusamus. Enim quos ullam obcaecati?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SpecialPrizes;