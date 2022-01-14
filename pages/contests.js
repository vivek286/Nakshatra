import Callisto from "../components/ContestsPage/Callisto"
import Hero from "../components/ContestsPage/Hero"
import Level from "../components/ContestsPage/Level"
import Rules from "../components/ContestsPage/Rules"
import Footer from "../components/UI/Footer"
import Navbar from "../components/UI/Navbar"
import StarsBackground from "../components/UI/Stars"

export default function Contests() {
    return (
        <>
            <div style={{ background: "linear-gradient(180deg, rgba(255, 128, 0, 0.84) 0%, #FF8000 0.01%, rgba(254, 1, 153, 0.33) 100%)" }}>
                <StarsBackground />
                <Navbar />
                <main style={{ position: 'relative', zIndex: 2 }}>
                    <Hero />
                    <Rules />
                    <Level title="Beginner Level" date="2 Feb" time="5:00" duration="1 hour" />
                    <Level title="Intermediate Level" date="2 Feb" time="5:00" duration="1 hour" />
                    <Level title="Expert Level" date="2 Feb" time="5:00" duration="1 hour" />
                    <Callisto />
                </main>
                <Footer />
            </div>
        </>
    )
}
