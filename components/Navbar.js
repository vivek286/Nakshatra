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
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Timeline</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;