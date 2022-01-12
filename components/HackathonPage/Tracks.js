import TrackItems from './Track-items';
import classes from './Tracks.module.css';

const Tracks = () => {
    return (
        <section className={classes.tracks}>
            <h2>Tracks</h2>
            <div className={classes.tracks_text}>
                <p>
                    Coming Soon....
                </p>
            </div>
            <div className={classes.tracks_grid}>
                <TrackItems />
                <TrackItems />
                <TrackItems />
                <TrackItems />
                <TrackItems />
            </div>
        </section>
    )
}
export default Tracks;