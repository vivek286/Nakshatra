import classes from './Event-Card.module.css';

const EventCard = ({ heading, description }) => {
    return (
        <div className={classes.card}>
            <div className={classes.heading}>
                <h3>{heading}</h3>
            </div>
            <div className={classes.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default EventCard;