import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <div className="fullPage">
                <Navbar />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
