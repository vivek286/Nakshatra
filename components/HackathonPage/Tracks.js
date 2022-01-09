import TrackItems from './Track-items';
import classes from './Tracks.module.css';

const Tracks = () => {
    return (
        <section className={classes.tracks}>
            <h2>Tracks</h2>
            <div className={classes.tracks_text}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores, commodi quod voluptatibus fugiat aliquam corporis mollitia autem reiciendis atque molestias ullam cupiditate? Iste magnam dignissimos architecto accusamus voluptatum! Mollitia sapiente magnam ea iure, quasi at illo blanditiis dignissimos vero.
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