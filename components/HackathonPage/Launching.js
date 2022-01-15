import { useEffect, useState } from 'react';
import DevFolioBtn from '../UI/DevfolioButton';
import classes from './Launching.module.css';


const Launching = () => {
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();


    useEffect(() => {
        function countDown() {
            const countDate = new Date("February 11, 2022 16:30:00").getTime();
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = 1000 * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const textDay = Math.floor(gap / day);
            const textHour = Math.floor((gap % day) / hour);
            const textMinute = Math.floor((gap % hour) / minute);
            const textSecond = Math.floor((gap % minute) / second);

            setDay(textDay);
            setHour(textHour);
            setMinute(textMinute);
            setSecond(textSecond);
        }
        const countDownTimer = setInterval(() => {
            countDown();
        }, 1000);


        return (() => {
            clearInterval(countDownTimer);
        })
    }, [])

    return (
        <section className={classes.hackathon}>
            <h2>Launching In</h2>
            <div className={classes.countdown}>
                <div className={`${classes.countdown_timer} ${classes.countdown_days}`}>
                    <div className={classes.countdown_value}>
                        <p>{day}</p>
                    </div>
                    <div className={classes.countdown_unit}>
                        <p>Days</p>
                    </div>
                </div>
                <div className={`${classes.countdown_timer} ${classes.countdown_hour}`}>
                    <div className={classes.countdown_value}>
                        <p>{hour}</p>
                    </div>
                    <div className={classes.countdown_unit}>
                        <p>Hours</p>
                    </div>
                </div>
                <div className={`${classes.countdown_timer} ${classes.countdown_min}`}>
                    <div className={classes.countdown_value}>
                        <p>{minute}</p>
                    </div>
                    <div className={classes.countdown_unit}>
                        <p>Min</p>
                    </div>
                </div>
                <div className={`${classes.countdown_timer} ${classes.countdown_sec}`}>
                    <div className={classes.countdown_value}>
                        <p>{second}</p>
                    </div>
                    <div className={classes.countdown_unit}>
                        <p>Sec</p>
                    </div>
                </div>
            </div>
            <div className={classes.heading}>
                <h1>
                    Hackosphere
                </h1>
                <p>
                    Showcase your extraordinary problem solving skills
                    Fill up your prodigious mind with ingenious ideas
                    Hack up your sphere of innovation
                </p>
                <DevFolioBtn />
            </div>
        </section>
    )
}
export default Launching;