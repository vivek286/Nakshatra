import classes from './Track-items-card.module.css';

const TrackItemsCard = (props) => {
    const a = ['a', 'a', 'a', 'a'];
    return (
        <>
            <div className={classes.card}>
                <h3>
                    Human Well Being
                </h3>
                <ul>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, nisi. Sunt vel sequi ut distinctio!</p> </li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, nisi. Sunt vel sequi ut distinctio!</p> </li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, nisi. Sunt vel sequi ut distinctio!</p> </li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, nisi. Sunt vel sequi ut distinctio!</p> </li>
                </ul>
            </div>
        </>
    )
}
export default TrackItemsCard;