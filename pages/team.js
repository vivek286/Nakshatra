import Footer from "../components/UI/Footer"
import Footer2 from "../components/IndexPage/Footer"
import Navbar from "../components/UI/Navbar"
import Page from "../components/Team/page"
import Core from "../components/Team/core"
import Mentor from "../components/Team/mentor"
import Executive from "../components/Team/executive"
import Head from "next/head"
import { useState } from "react"
import StarsBackground from "../components/UI/Stars"



export default function Home() {
  const [pageTitle, setPageTitle] = useState('Nakshatra');


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <StarsBackground />
      <Navbar setPageTitle={setPageTitle} />
      <main>
        <Page />
        <Core />
        <Mentor />
        <Executive />
      </main>
      <Footer />

    </>
  )
}
