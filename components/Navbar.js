import Link from 'next/link';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header_logo}>
                <img src="./nav_logo.png" alt="" />
            </div>
            <nav className={classes.navbar}>
                <ul>
                    <li><Link href="#Home">Home</Link></li>
                    <li><Link href="#About">About</Link></li>
                    <li><Link href="#Events">Events</Link></li>
                    <li><Link href="#Timeline">Timeline</Link></li>
                    <li><Link href="#Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;