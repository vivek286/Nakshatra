import classes from './Timeline-item.module.css';
import Fade from 'react-reveal/Fade'


const TimelineItem = ({ time, title, speaker, description }) => {

    return (
        <Fade top cascade duration={500} >
            <div className={classes.timeline_item}>
                <div className={classes.time} >
                    <p>{time} pm</p>
                </div>
                <div className={classes.description}>
                    <div>
                        <p >{title}</p>
                        <p>{speaker}</p>
                    </div>
                    {/* <img src="/add-event.png" alt="Add to calendar" className={classes.add} /> */}
                </div>
            </div>

        </Fade>
    )
}
export default TimelineItem;