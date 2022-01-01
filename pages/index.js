import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Pages from "../components/Pages"
import Events from "../components/Events"
import Speakers from "../components/Speakers"

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
      </main>
    </>
  )
}
