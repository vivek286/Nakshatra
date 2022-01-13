import Footer from "../components/UI/Footer"
import Navbar from "../components/UI/Navbar"
import Page from "../components/Team/page"
import Core from "../components/Team/core"
import Mentor from "../components/Team/mentor"
import Executive from "../components/Team/executive"
import Head from "next/head"
import { useState } from "react"
import StarsBackground from "../components/UI/Stars"
import classes from '../styles/team.module.css';



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
      <div className={classes.credits}>
        <div className={classes.design}>
          <p>
            Designed by <a href="#" target="_blank" rel="noopener noreferrer" className={classes.link}>Tanishqa</a>
          </p>
        </div>
        <div className={classes.developed}>
          <p>
            Developed By <a href="https://github.com/bilal-23/personal-portfolio" target="_blank" rel="noopener noreferrer" className={classes.link}>Bilal, </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={classes.link}>Vivek &amp;, </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={classes.link}>Yash</a>
          </p>
        </div>

      </div>
      <Footer />
    </>
  )
}
