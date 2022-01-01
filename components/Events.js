import EventCard from './Event-Card';
import classes from './Events.module.css';

const Events = () => {
    return <section className={classes.events}>
        <h2>Events</h2>
        <div className={classes.events_card}>
            <EventCard heading="Sessions" description="The workshops are on some of the hot topics of today’s time, which will improve your intellectual skills along with technical skills. The speakers of the workshops are experts who will be sharing their valuable knowledge with all." img="session" />
            <EventCard heading="Hackathons" img="hacker" />
            <EventCard heading="Contests" img="trophy" />
        </div>
    </section>
}
export default Events;