import classes from './Track-items-card.module.css';

const TrackItemsCard = (props) => {
    const a = ['a', 'a', 'a', 'a'];
    return (
        <>
            <div className={classes.card}>
                <h3>
                    Coming Soon...
                </h3>
                <ul>
                    <li><p>Coming Soon...</p> </li>
                    <li><p>Coming Soon...</p> </li>
                    <li><p>Coming Soon...</p> </li>
                    <li><p>Coming Soon...</p> </li>
                </ul>
            </div>
        </>
    )
}
export default TrackItemsCard;