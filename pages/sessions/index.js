import Navbar from "../../components/UI/Navbar";
import Head from "next/head";
import classes from './sessions.module.css';
import Hero from "../../components/SessionPage/Hero";
import SessionItem from "../../components/SessionPage/SessionItem";
import Footer from '../../components/UI/Footer';

const Session = () => {
    return (
        <>
            <Head>
                <title>Sessions</title>
            </Head>
            <main className={classes.wrapper}>
                <div className={classes.stars}>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                    <div id='stars4'></div>
                    <div id='stars5'></div>
                </div>
                <Navbar />
                <Hero />
                <section className={classes.sessions}>
                    <SessionItem heading="OpStar" speaker={{ name: 'Tanishqa Porwal', org: 'MU-GDSC', desig: "Lead" }} description="Development and Operations are the two words that combine to form DevOps. So get ready to remove the oopsies from your development and become a devOPSTAR" points={["Blah", "Blah", "Blah"]} date="11TH FEB" time="5:00PM" />

                    <SessionItem heading="Stellar" speaker={{ name: 'Tanishqa Porwal', org: 'MU-GDSC', desig: "Lead" }} description="To glorify the experience of a product by giving it an aesthetic touch is all about the UI. So make your hardwok as appealing as STELLAR in the galaxy" points={["Blah", "Blah", "Blah"]} date="11TH FEB" time="5:00PM" />

                    <SessionItem heading="Phoenix" speaker={{ name: 'Tanishqa Porwal', org: 'MU-GDSC', desig: "Lead" }} description="Nakshatra presents this section specifically for the girl power to shine. Know it all as how women have a universe of unknown opportunities, fields and jobs where women are encouraged and aware of how women can shine and go as high as the moon.
                    " points={["Blah", "Blah", "Blah"]} date="11TH FEB" time="5:00PM" />

                    <SessionItem heading="MAven" speaker={{ name: 'Tanishqa Porwal', org: 'MU-GDSC', desig: "Lead" }} description="One of the two trending topics in today’s world is AI and Ml. It’s all about using human intelligence to create an artificial one. So let’s get ready to know technology of future " points={["Blah", "Blah", "Blah"]} date="11TH FEB" time="5:00PM" />

                    <SessionItem heading="CryptoNova" speaker={{ name: 'Tanishqa Porwal', org: 'MU-GDSC', desig: "Lead" }} description="As rightfully said, CRYPTO is the future of investments yet is a world of confusions and mistakes, get it all clear and get to know about all the opportunities in this supernova of holdings." points={["Blah", "Blah", "Blah"]} date="11TH FEB" time="5:00PM" />

                    <SessionItem heading="Fly me to the moon" speaker={{ name: 'Tanishqa Porwal', org: 'MU-GDSC', desig: "Lead" }} description="Just in the pandemic time , we realized how remote jobs can become a hero in an individual’s profile. So be on par with all the work from home opportunities you can grab just by attending this amazing event FLY ME TO THE MOON." points={["Blah", "Blah", "Blah"]} date="11TH FEB" time="5:00PM" />
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Session;


