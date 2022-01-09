import Navbar from "../../components/UI/Navbar";
import Head from "next/head";
import classes from './sessions.module.css';

const Session = () => {
    return (
        <>
            <Head>
                <title>Sessions</title>
            </Head>
            <div className={classes.wrapper}>
                <Navbar />
                <div>

                </div>
            </div>
        </>
    )
}
export default Session;