import {
    landing_page,
    heading,
    description,
    clicker,
} from "../styles/LandingPage.module.css";
import Login from "./Login";

const LandingPage = () => {
    return (
        <div className={landing_page}>
            <h1 className={heading}>
                Want to start working on an idea, but can’t do it alone?
            </h1>
            <p className={description}>
                Welcome to TeamFind. TeamFind is a platform where you can find
                people with similar interests and people who want to work on
                your idea with you.
            </p>
            <p className={clicker}>Find Your Team</p>
            <Login />
        </div>
    );
};

export default LandingPage;
