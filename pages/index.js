import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Prizes from "../components/Prizes"
import Events from "../components/Events"
import Speakers from "../components/Speakers"
import Timeline from "../components/Timeline"
import Involved from "../components/Involved"
import Sponsors from "../components/Sponsors"
import FAQ from "../components/FAQ"


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Prizes />
        <Events />
        <Speakers />
        <Timeline />
        <Involved />
        <Sponsors />
        <FAQ />
      </main>
    </>
  )
}
