import Head from "next/head";
import Layout from "@/components/Layout";
import LandingPage from "@/components/LandingPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>TeamFind</title>
                <meta
                    name="description"
                    content="TeamFind is a place to find and create teams so you can start working on your projects right away."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="Top-logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Layout>
                <LandingPage></LandingPage>
            </Layout>
        </>
    );
}
