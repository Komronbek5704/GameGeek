import { FaCartShopping } from "react-icons/fa6";
import RatingStars from "./RatingStars.jsx";
import Button from "../button/Button";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ product, cart, setCart }) => {
  return (
    <div className={styles.card}>
      <img src={product.image_url} alt={product.product_name} />
      <h3 className={styles.title}>
        <Link className={styles.name} to={`/Products/${product.id}`} >{product.name}</Link>
      </h3>
      <p className={styles.description}>{product.description}</p>

      <div className={styles.colors}>
        {product.color_options.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
            }}
            className={styles.color}
          />
        ))}
      </div>
      <p className={styles.price}>$ {product.price}</p>
      <RatingStars rating={product.rating} />
      <div>
        <Button onClick={() => setCart([...cart, product])}>
          <FaCartShopping />
          <span style={{ marginLeft: "0.8em" }}>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
