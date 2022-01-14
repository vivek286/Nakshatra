
import ContestItem from "../components/ContestsPage/ContestItem"
import Hero from "../components/ContestsPage/Hero"
import Level from "../components/ContestsPage/Level"
import Rules from "../components/ContestsPage/Rules"
import Footer from "../components/UI/Footer"
import Navbar from "../components/UI/Navbar"
import StarsBackground from "../components/UI/Stars"

export default function Contests() {
    return (
        <>
            <StarsBackground />
            <div style={{ background: "linear-gradient(180deg, rgba(255, 128, 0, 0.84) 0%, #FF8000 0.01%, rgba(254, 1, 153, 0.33) 100%)" }}>
                <Navbar />
                <main style={{ position: 'relative', zIndex: 2 }}>
                    <Hero />
                    <Rules />
                    <Level title="Beginner Level" date="2 Feb" time="5:00" duration="1 hour" />
                    <Level title="Intermediate Level" date="2 Feb" time="5:00" duration="1 hour" />
                    <Level title="Expert Level" date="2 Feb" time="5:00" duration="1 hour" />

                    <ContestItem title="CallistO"
                        description="Writing up the technical content is the perfect combination in the field of study, and is a fabulous way of sharing the accumulated knowledge by giving it a theoretical perspective with an interesting touch.  (concluding line missing)"
                        topics={["Coming Soon", "Coming Soon", "COming Soon"]}
                        guidelines={["Coming Soon", "Coming Soon", "COming Soon"]}
                        image="writing.png"
                        prize1="book1.png"
                        prize2="book2.png" />

                    <ContestItem title="Poster Making"
                        description="To give the series of competitions an aesthetic touch there will be a poster/digital art competition. Exhibit your creativity through it!!"
                        topics={["Coming Soon", "Coming Soon", "COming Soon"]}
                        guidelines={["Coming Soon", "Coming Soon", "COming Soon"]}
                        image="poster.png"
                        prize1="poster1.png"
                        prize2="poster2.png" />
                </main>
                <Footer />
            </div>
        </>
    )
}
