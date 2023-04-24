import {
    navbar,
    nav_brand,
    nav_links,
    nav_link,
    line,
} from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={navbar}>
            <h2 className={nav_brand}>
                <Link href={"/home"}>TeamFind</Link>
            </h2>
            <div className={nav_links}>
                <Link className={nav_link} href="#">
                    Contact
                </Link>
                <Link className={nav_link} href="">
                    Team
                </Link>
                <Link className={nav_link} href="">
                    About
                </Link>
            </div>
            <hr className={line} />
        </nav>
    );
};

export default Navbar;
