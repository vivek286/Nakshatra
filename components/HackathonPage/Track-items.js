import classes from './Track-items-card.module.css';

const TrackItemsCard = (props) => {
    console.log(props.points)
    return (
        <>
            <div className={classes.card}>
                <h3>
                    {props.title}
                </h3>
                <p className={classes.subheading}>{props.subheading}</p>
                <ul>
                    {props.points.map((item, index) => {
                        return <li key={index}>
                            <p>{item}</p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
export default TrackItemsCard;