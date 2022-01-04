import classes from './Timeline-item.module.css';

const TimelineItem = ({ active, time, title, speaker }) => {
    return (
        <div className={classes.timeline_item}>
            <div className={classes.time} style={{ background: `${active ? '#FE0199' : '#fff'}` }}>
                <p style={{ color: `${active ? '#000' : '#FE0199'}` }}>{time} pm</p>
            </div>
            <div className={classes.description}>
                <p style={{ color: `${active ? '#000' : '#FE0199'}` }} >{title}</p>
                <p>{speaker}</p>
            </div>
        </div>
    )
}
export default TimelineItem;