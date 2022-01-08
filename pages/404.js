
import Navbar from '../components/UI/Navbar'
import Link from 'next/link';
import classes from './404.module.css';
import Head from "next/head"
const errorPage = () => {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <header className={classes["top-header"]}>
                <Navbar />
            </header>
            <div>
                <div className={classes["starsec"]}></div>
                <div className={classes["starthird"]}></div>
                <div className={classes["starfourth"]}></div>
                <div className={classes["starfifth"]}></div>
            </div>



            <div className={classes["lamp__wrap"]}>
                <div className={classes["lamp"]}>
                    <div className={classes["cable"]}></div>
                    <div className={classes["cover"]}></div>
                    <div className={classes["in-cover"]}>
                        <div className={classes["bulb"]}></div>
                    </div>
                    <div className={classes["light"]}></div>
                </div>
            </div>
            <section className={classes["error"]}>

                <div className={classes["error__content"]}>
                    <div className={classes["error__message message"]}>
                        <h1 className={classes["message__title"]}>Page Not Found</h1>
                        <p className={classes["message__text"]}>We&apos;re sorry, the page you were looking for isn&apos;t found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                    </div>
                    <div className={classes["error__nav e-nav"]}>
                        <Link href="/">
                            <a className={classes["e-nav__link"]}></a>
                        </Link>
                    </div>
                </div>

            </section>


        </>
    )
}

export default errorPage