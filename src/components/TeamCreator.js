import { container, heading_text, btn } from "@/styles/Home.module.css";

const TeamCreator = () => {
    return (
        <div className={container}>
            <p className={heading_text}>
                Get your projects started with the best team members.
            </p>
            <button className={btn}>Create Your Team</button>
        </div>
    );
};

export default TeamCreator;
