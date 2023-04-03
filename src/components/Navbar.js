import {
    navbar,
    nav_brand,
    nav_links,
    nav_link,
    line,
} from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={navbar}>
            <h2 className={nav_brand}>TeamFind</h2>
            <div className={nav_links}>
                <a className={nav_link} href="#">
                    Contact
                </a>
                <a className={nav_link} href="">
                    Team
                </a>
                <a className={nav_link} href="">
                    About
                </a>
            </div>
            <hr className={line} />
        </nav>
    );
};

export default Navbar;
