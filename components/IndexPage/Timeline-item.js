import classes from './Timeline-item.module.css';
import Fade from 'react-reveal/Fade';

const TimelineItem = ({ active, time, title, speaker }) => {
    return (
        <Fade top cascade duration={500} >
            <div className={classes.timeline_item}>
                <div className={classes.time} style={{ background: `${active ? '#FE0199' : '#fff'}` }}>
                    <p style={{ color: `${active ? '#000' : '#FE0199'}` }}>{time} pm</p>
                </div>
                <div className={classes.description}>
                    <p style={{ color: `${active ? '#000' : '#FE0199'}` }} >{title}</p>
                    <p>{speaker}</p>
                </div>
            </div>
        </Fade>
    )
}
export default TimelineItem;