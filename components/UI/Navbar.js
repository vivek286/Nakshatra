import Link from 'next/link';
import { useEffect, useState } from 'react';
import classes from './Navbar.module.css';

const Navbar = ({ setPageTitle }) => {
    const [solidBackground, setSolidBackground] = useState();


    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    console.log(window.scrollY)
                    setSolidBackground(true);
                } else {
                    setSolidBackground(false);
                }
            })
        }

        return (() => {
            window.removeEventListener('scroll', () => { })
        })
    }, [])

    return (
        <header className={classes.header} style={{
            background: `${solidBackground ? '#000A2B' : 'transparent'}`,
            boxShadow: `${solidBackground ? `1px 1px 1px #000A2B` : 'none'}`
        }}>
            <div className={classes.header_logo}>
                <img src="/nav_logo.png" alt="" />
            </div>
            <nav className={classes.navbar}>
                <ul>
                    <li><Link href="/#Home" >Home</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('About – Nakshatra')}><Link href="/hackathons" >Hackathons</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Events – Nakshatra')}><Link href="/contests">Contests</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Events – Nakshatra')}><Link href="/sessions">Sessions</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Timeline – Nakshatra')}><Link href="/#Timeline">Timeline</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Contact – Nakshatra')}><Link href="/team">Team</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Contact – Nakshatra')}><Link href="#Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;