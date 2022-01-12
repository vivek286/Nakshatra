import Link from 'next/link';
import classes from './Event-Card.module.css';

const EventCard = ({ img, heading, description, card, link }) => {
    return (
        <Link href={`/${link}`}>
            <a href="" className={classes.link}>
                <div className={classes.card}>
                    <div className={classes.heading}>
                        <h3>{heading}</h3>
                        <img src={`${img}.svg`} alt={heading} />
                    </div>
                    <div className={classes.description}>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
export default EventCard;