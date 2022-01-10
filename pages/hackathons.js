import Judges from "../components/HackathonPage/Judges";
import Launching from "../components/HackathonPage/Launching";
import Prizes from "../components/HackathonPage/Prizes";
import Rules from "../components/HackathonPage/Rules";
import SpecialPrizes from "../components/HackathonPage/Special-Prizes";
import Tracks from "../components/HackathonPage/Tracks";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";

const Hackathon = () => {
    return (<>
        <Navbar />

        <main>
            <Launching />
            <Tracks />
            <Prizes />
            <SpecialPrizes />
            <Judges />
        </main>
        <Rules />
        <Footer />
    </>)
}
export default Hackathon;