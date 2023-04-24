import {
    container,
    err_container,
    err_code,
    err_msg,
    illustration,
} from "@/styles/404.module.css";

const error = () => {
    return (
        <div className={container}>
            <div className={err_container}>
                <h1 className={err_code}>404</h1>
                <h2 className={err_msg}>Page Not found</h2>
                <a href="/home">Home</a>
            </div>
            <img
                src="/404error.jpg"
                className={illustration}
                alt="404 error illustration"
            />
        </div>
    );
};

export default error;
