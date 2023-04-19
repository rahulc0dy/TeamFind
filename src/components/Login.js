import {
    form_container,
    heading,
    form,
    form_input,
    button,
    signup,
    bggraphic,
} from "@/styles/Login.module.css";

const Login = () => {
    return (
        <>
            <div className={bggraphic}></div>
            <div className={form_container}>
                <h5 className={heading}> Log In</h5>
                <form className={form} action="submit">
                    <label htmlFor="username">
                        Username <input className={form_input} type="text" />
                    </label>
                    <label htmlFor="password">
                        Password{" "}
                        <input className={form_input} type="password" />
                    </label>
                    <button className={button}>Login</button>
                </form>
                <p className={signup}>
                    Don't have an account?
                    <br />
                    <a href="#">Sign Up</a>
                </p>
            </div>
        </>
    );
};

export default Login;
