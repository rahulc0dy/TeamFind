import { footer, header, text } from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={footer}>
            <h2 className={header}> TeamFind</h2>
            <div className={text}>
                Created by: Rahul Chakraborty <br />
                <br />
                Contacts <br />
                e-mail: rahulchakraborty337@gmail.com <br />
                phone: available upon request. <br />
                <br />
                social:
            </div>
            <div className={text}>
                Creator Details: First year student at University of Calcutta,
                <br />
                B.Tech., Computer Science and Engineering <br />
                <br />
                Personal portfolio at rahulc0dy.github.io
                <br />
            </div>
        </footer>
    );
};

export default Footer;
