import { useState } from 'react';
import TimelineItem from './Timeline-item';
import classes from './Timeline.module.css';
import Fade from 'react-reveal/Fade';


const feb1 = [{ time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop', active: true }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }, { time: '7:30', speaker: 'Bilal Mansuri', title: 'Web Dev Workshop' }];

const feb2 = [{ time: '8:00', speaker: 'Anas Khan', title: 'Android Workshop', active: true }, { time: '8:00', speaker: 'Anas Khan', title: 'Android Workshop' }, { time: '8:00', speaker: 'Anas Khan', title: 'Android Workshop' }, { time: '8:00', speaker: 'Anas Khan', title: 'Android Workshop' }, { time: '8:00', speaker: 'Anas Khan', title: 'Android Workshop' }, { time: '8:00', speaker: 'Anas Khan', title: 'Android Workshop' }, { time: '8:00', speaker: 'Anas Khan', title: 'Android Workshop' }, { time: '8:00', speaker: 'Anas Khan', title: 'Android Workshop' }];

const feb3 = [{ time: "9:00", speaker: 'Ritik Tailor', title: 'CP Workshop', active: true }, { time: "9:00", speaker: 'Ritik Tailor', title: 'CP Workshop' }, { time: "9:00", speaker: 'Ritik Tailor', title: 'CP Workshop' }, { time: "9:00", speaker: 'Ritik Tailor', title: 'CP Workshop' }, { time: "9:00", speaker: 'Ritik Tailor', title: 'CP Workshop' }, { time: "9:00", speaker: 'Ritik Tailor', title: 'CP Workshop' }, { time: "9:00", speaker: 'Ritik Tailor', title: 'CP Workshop' }, { time: "9:00", speaker: 'Ritik Tailor', title: 'CP Workshop' }];

const Timeline = () => {
    const [activeDate, setActiveDate] = useState(1);

    const changeDateHandler = (date) => {
        setActiveDate(date)
    }

    return (
        <section className={classes.timeline} id="Timeline">
            <h2>
                Timeline
            </h2>
            <div className={classes.timeline_container}>
                <p className={classes.container_subheading}>Check out the timeline below and mark your calendar to ....</p>
                <div className={classes.dates}>
                    <p className={`${activeDate === 1 && classes.active}`} onClick={() => changeDateHandler(1)}>Feb 1</p>
                    <p className={`${activeDate === 2 && classes.active}`} onClick={() => changeDateHandler(2)}>Feb 2</p>
                    <p className={`${activeDate === 3 && classes.active}`} onClick={() => changeDateHandler(3)}>Feb 3</p>
                </div>
                <div className={classes.timeline_items}>
                    {activeDate === 1 && feb1.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} />)}
                    {activeDate === 2 && feb2.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} />)}
                    {activeDate === 3 && feb3.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} />)}
                </div>

            </div>
        </section>
    )
}
export default Timeline;
