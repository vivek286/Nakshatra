import classes from './Event-Card.module.css';

const EventCard = ({ img, heading, description }) => {
    return (
        <div className={classes.card}>
            <div className={classes.heading}>
                <h3>{heading}</h3>
                <img src={`${img}.svg`} alt={heading} />
            </div>
            <div className={classes.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default EventCard;