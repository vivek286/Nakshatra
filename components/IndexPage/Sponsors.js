import Image from 'next/image';
import classes from './Sponsors.module.css';

const Sponsors = () => {
    return (
        <section className={classes.sponsors} id="Sponsors">
            <h2>Sponsors</h2>
            <div className={classes.sponsors_conatiner}>
                <div className={classes.sponsors_details}>
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <img src="/sponsors/gold.png" alt="Star" />
                            <img src="/sponsors/gold.png" alt="Star" />
                            <img src="/sponsors/gold.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            {/* <p>Coming Soon...</p> */}
                            <div className={classes.sponsor_images_container}>
                                <img src="/sponsors/gold/devfolio.svg" alt="Devfolio Logo" loading='lazy' />
                            </div>
                            <div className={classes.sponsor_images_container}>
                                <img src="/sponsors/gold/polygon.svg" alt="Polygon Logo" loading='lazy' />
                            </div>


                        </div>
                    </div>
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <img src="/sponsors/silver.png" alt="Star" />
                            <img src="/sponsors/silver.png" alt="Star" />
                            <img src="/sponsors/silver.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            {/* <p>Coming Soon...</p> */}
                            <div className={classes.sponsor_images_container}>

                                <img src="/sponsors/silver/celo.svg" alt="Celo Logo" loading='lazy' />

                            </div>
                            <div className={classes.sponsor_images_container}>
                                <img src="/sponsors/silver/filecoin.svg" alt="Filecoin Logo" loading='lazy' />
                            </div>
                            <div className={classes.sponsor_images_container}>
                                <img src="/sponsors/silver/tezos.svg" alt="Tezos Logo" loading='lazy' />
                            </div>
                            <div className={classes.sponsor_images_container}>
                                <img src="/sponsors/silver/gmc.png" alt="GMC Logo" loading='lazy' />
                            </div>
                            <div className={classes.sponsor_images_container}>
                                <img src="/sponsors/silver/wolfram.png" alt="GMC Logo" loading='lazy' />
                            </div>
                        </div>
                    </div>
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <img src="/sponsors/bronze.png" alt="Star" />
                            <img src="/sponsors/bronze.png" alt="Star" />
                            <img src="/sponsors/bronze.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            <p>Coming Soon...</p>
                            {/* <img src="/sponsors/google.svg" alt="Google" />
                            <img src="/sponsors/amazon.svg" alt="Google" />
                            <img src="/sponsors/tesla.svg" alt="Google" /> */}
                        </div>
                    </div>
                </div>
                <div className={classes.sponsors_subheading}>
                    <p>Interested in sponsoring Nakshatra? Send us the mail <a href="mailto:mugdsc@gmail.com" target="_blank" rel="noopener noreferrer">mugdsc@gmail.com</a> </p>
                </div>
            </div>
        </section>
    )
}
export default Sponsors;