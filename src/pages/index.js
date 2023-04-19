import Head from "next/head";
import Layout from "@/components/Layout";
import LandingPage from "@/components/LandingPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>TeamFind | Login</title>
                <meta
                    name="description"
                    content="TeamFind is a place to find and create teams so you can start working on your projects right away."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Layout>
                <LandingPage />
            </Layout>
        </>
    );
}
