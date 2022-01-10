import classes from './SessionItem.module.css';

const SessionItem = ({ heading, speaker, description, points, date, time }) => {
    return (
        <div className={classes.session_item}>
            <div className={classes.left}>
                <div className={classes.speaker_img}>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className={classes.speaker_details}>
                    <p className={classes.name}>{speaker.name}</p>
                    <p className={classes.org}>{speaker.org}</p>
                    <p className={classes.designation}>{speaker.desig}</p>
                </div>
                <a href=""><button className={classes.btn}>Join Here</button></a>
            </div>
            <div className={classes.right}>
                <h2>{heading}</h2>
                <p>{description}</p>
                <ul>
                    {points.map((item, index) => <li key={index}>{item}</li>)}
                    {/* <li>Blah</li>
                    <li>Blah</li>
                    <li>Blah</li> */}
                </ul>
                <div className={classes.time}>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>
        </div>
    )
}

export default SessionItem;