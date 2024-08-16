import PropTypes from "prop-types"
import { useContext } from "react"
import { productContext } from "../components/ProductProvider"
import { useParams } from "react-router-dom";
import styles from "./ProductInfo.module.scss";
    export default function ProductInfo () {
    const products = useContext(productContext);
    const { productId } = useParams();
    const product = products.find(product => product.id === parseInt(productId));
    console.log(product);
        return (
            <>
        <div className={styles.nav}>
            <p>
                <a href="/">Home</a> &#10148;
                <a href="/shop"> Shop All </a> &#10148; 
                 &nbsp;{product.title}
                    
            </p>

        </div>
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <img className={styles.image} src={product.image}></img>
            </div>
            <div className={styles.description}>
                <h2>{product.title}</h2>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <button className={styles.cartButton}>ADD TO CART</button>
            </div>
        </div>
        </>
        )
}

ProductInfo.propTypes = {
    product: PropTypes.node,
}