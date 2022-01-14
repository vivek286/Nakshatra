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
        <div className={classes.developed}>
          <p>
            <span>
              Developed By
            </span>
            <a href="https://www.bilalmansuri.tech/" target="_blank" rel="noopener noreferrer" className={classes.link}> Bilal</a><span> &amp; </span>
            <a href="https://vivek286.github.io/portfolio/final%20portfolio/index.html" target="_blank" rel="noopener noreferrer" className={classes.link}>Vivek </a>
          </p>
        </div>
        <div className={classes.design}>
          <p>
            <span>
              Designed by
            </span>
            <a href="https://www.linkedin.com/in/tanishqa-porwal-666b81194/" target="_blank" rel="noopener noreferrer" className={classes.link}> Tanishqa</a>
            <span> &amp; </span>
            <a href="https://instagram.com/noodledoodle.x?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className={classes.link}> Nandini</a>
          </p>
        </div>


      </div>
      <Footer />
    </>
  )
}
