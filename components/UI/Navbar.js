import Link from 'next/link';
import classes from './Navbar.module.css';

const Navbar = ({ setPageTitle }) => {
    return (
        <header className={classes.header}>
            <div className={classes.header_logo}>
                <img src="/nav_logo.png" alt="" />
            </div>
            <nav className={classes.navbar}>
                <ul>
                    <li><Link href="/#Home" >Home</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('About – Nakshatra')}><Link href="/#About" >About</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Events – Nakshatra')}><Link href="/#Events">Events</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Timeline – Nakshatra')}><Link href="/#Timeline">Timeline</Link></li>
                    <li onClick={() => setPageTitle && setPageTitle('Contact – Nakshatra')}><Link href="/#Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;