import {
    container,
    err_container,
    err_code,
    err_msg,
    illustration,
} from "@/styles/404.module.css";
import Link from "next/link";
import Image from "next/image";

const error = () => {
    return (
        <div className={container}>
            <div className={err_container}>
                <h1 className={err_code}>404</h1>
                <h2 className={err_msg}>Page Not found</h2>
                <Link href="/home">Home</Link>
            </div>
            <Image
                src="/404error.jpg"
                className={illustration}
                alt="404 error illustration"
                width={800}
                height={700}
            />
        </div>
    );
};

export default error;
