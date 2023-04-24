import { carousel } from "@/styles/Carousel.module.css";

const Carousel = ({ children }) => {
    return <div className={carousel}>{children}</div>;
};

export default Carousel;
