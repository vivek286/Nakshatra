import Judges from "../components/HackathonPage/Judges";
import Launching from "../components/HackathonPage/Launching";
import Prizes from "../components/HackathonPage/Prizes";
import SpecialPrizes from "../components/HackathonPage/Special-Prizes";
import Tracks from "../components/HackathonPage/Tracks";
import Navbar from "../components/UI/Navbar";

const Hackathon = () => {
    return (<>
        <Navbar />
        <Launching />
        <Tracks />
        <Prizes />
        <SpecialPrizes />
        <Judges />
    </>)
}
export default Hackathon;