import { card, image, description, h3, p, btn } from "@/styles/Card.module.css";

const Card = () => {
    return (
        <div className={card}>
            <div className={image} />
            <div className={description}>
                <h3 className={h3}>Technology</h3>
                <p className={p}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    qui ut praesentium natus velit vero.
                </p>
                <button className={btn}>View All Teams</button>
            </div>
        </div>
    );
};

export default Card;
