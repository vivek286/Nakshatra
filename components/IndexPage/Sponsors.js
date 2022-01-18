import Image from 'next/image';
import classes from './Sponsors.module.css';

const goldSponsors = [
    {
        image: "devfolio.svg",
        alt: "Devfolio",
        link: "https://devfolio.co/home/"
    },
    {
        image: "polygon.svg",
        alt: "Polygon",
        link: "https://polygon.technology/"
    },
    {
        image: "gfg.png",
        alt: "Geeks For Geeks",
        link: "https://www.geeksforgeeks.org/"
    }
]

const silverSponsors = [
    {
        image: "celo.svg",
        alt: "Celo",
        link: "https://celo.org/"
    },
    {
        image: "filecoin.svg",
        alt: "Filecoin",
        link: "https://filecoin.io/",
    },
    {
        image: "tezos.svg",
        alt: "Tezos",
        link: "https://tezos.com/"
    },
    {
        image: "GMC.png",
        alt: "GMC",
        link: ""
    }
]

const Sponsors = () => {
    return (
        <section className={classes.sponsors} id="Sponsors">
            <h2>Sponsors</h2>
            <div className={classes.sponsors_conatiner}>
                <div className={classes.sponsors_details}>
                    <div className={classes.sponsor_div}>

                        {/* GOLD SPONSORS */}
                        <div className={classes.star}>
                            <Image width={50} height={50} src="/sponsors/gold.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/gold.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/gold.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            {goldSponsors.map((item, index) => {
                                return (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <div className={classes.sponsor_images_container}>
                                            <img src={`/sponsors/gold/${item.image}`} alt={item.alt} loading='lazy' />
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* SILVER SPONSORS */}
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <Image width={50} height={50} src="/sponsors/silver.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/silver.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/silver.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            <a href="https://www.notion.so/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0" target="_blank" rel="noopener noreferrer">
                                <div className={classes.sponsor_images_container}>
                                    <img src="/sponsors/silver/celo.svg" alt="Celo Logo" loading='lazy' />
                                </div>
                            </a>

                            <a href="https://devfolio.notion.site/Filecoin-Devfolio-Hackathon-Season-Prize-998fc3fe477e474086ae1d5ed1685203" target="_blank" rel="noopener noreferrer">
                                <div className={classes.sponsor_images_container}>
                                    <img src="/sponsors/silver/filecoin.svg" alt="Filecoin Logo" loading='lazy' />
                                </div>
                            </a>
                            <a href="https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff" target="_blank" rel="noopener noreferrer">
                                <div className={classes.sponsor_images_container}>
                                    <img src="/sponsors/silver/tezos.svg" alt="Tezos Logo" loading='lazy' />
                                </div>
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className={classes.sponsor_images_container}>
                                    <img src="/sponsors/silver/gmc.png" alt="GMC Logo" loading='lazy' />
                                </div>
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className={classes.sponsor_images_container}>
                                    <img src="/sponsors/silver/wolfram.png" alt="GMC Logo" loading='lazy' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <Image width={50} height={50} src="/sponsors/bronze.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/bronze.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/bronze.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className={classes.sponsor_images_container}>
                                    <img src="/sponsors/bronze/jetbrains.svg" alt="Jet Brains Logo" loading='lazy' />
                                </div>
                            </a>

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