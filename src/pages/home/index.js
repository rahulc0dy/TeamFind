import Carousel from "@/components/Caousel";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import TeamCreator from "@/components/TeamCreator";
import { main_container } from "@/styles/Home.module.css";

const home = ({ children }) => {
    return (
        <Layout>
            <div className={main_container}>
                <TeamCreator />
                <Carousel>
                    <Card />
                    <Card />
                </Carousel>
                <Carousel>
                    <Card />

                    <Card />
                </Carousel>
            </div>
        </Layout>
    );
};

export default home;
