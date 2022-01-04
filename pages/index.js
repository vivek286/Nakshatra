import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Pages from "../components/Pages"
import Events from "../components/Events"
import Speakers from "../components/Speakers"
import Timeline from "../components/Timeline"
import Involved from "../components/Involved"
import Sponsors from "../components/Sponsors"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pages />
        <Events />
        <Speakers />
        <Timeline />
        <Involved />
        <Sponsors />
      </main>
    </>
  )
}
