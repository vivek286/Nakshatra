import classes from './Involved.module.css';

const Involved = () => {
    return (
        <section className={classes.involved}>
            <h2>Get Involved</h2>
            <div className={classes.involved_container}>
                <p className={classes.container_subheading}>Sharing is caring, good things should reach to stars....involve your community and stuff</p>
                <div className={classes.involved_actions}>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <div className={`${classes.btn_1} ${classes.action_button}`}>
                            <img src="/partner.svg" alt="Partner" />
                            <p>Become community partner</p>
                        </div>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <div className={`${classes.btn_2} ${classes.action_button}`}>
                            <img src="/community.svg" alt="Community" />
                            <p>Become community manager</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Involved;