import SpeakerCard from './SpeakerCard';
import classes from './Speakers.module.css';
const Speakers = () => {
    return (
        <section className={classes.speakers} id="Speakers">
            <h2>Speakers</h2>
            <div className={classes.speakers_cards}>
                <SpeakerCard name="Tanishqa Porwal" org="MU-GDSC" role="Lead" linkedin="https://www.linkedin.com/feed/" twitter="https://twitter.com/home" />
                <SpeakerCard name="Tanishqa Porwal" org="MU-GDSC" role="Lead" linkedin="https://www.linkedin.com/feed/" twitter="https://twitter.com/home" />
                <SpeakerCard name="Tanishqa Porwal" org="MU-GDSC" role="Lead" linkedin="https://www.linkedin.com/feed/" twitter="https://twitter.com/home" />
                <SpeakerCard name="Tanishqa Porwal" org="MU-GDSC" role="Lead" linkedin="https://www.linkedin.com/feed/" twitter="https://twitter.com/home" />
                <SpeakerCard name="Tanishqa Porwal" org="MU-GDSC" role="Lead" linkedin="https://www.linkedin.com/feed/" twitter="https://twitter.com/home" />
                <SpeakerCard name="Tanishqa Porwal" org="MU-GDSC" role="Lead" linkedin="https://www.linkedin.com/feed/" twitter="https://twitter.com/home" />
            </div>
        </section>
    )
}
export default Speakers;