import PropTypes from "prop-types"
import { useContext, useEffect, useState } from "react"
import { productContext } from "../components/ProductProvider"
import { useParams } from "react-router-dom";
import styles from "./ProductInfo.module.scss";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

    export default function ProductInfo () {
    const [loading, setLoading] = useState(true);
    const products = useContext(productContext);
    const { productId } = useParams();
    const product = products.find(product => product.id === parseInt(productId));
    const recommendedProduct = products.filter(p => p.category === product.category);
    useEffect(() => {
        if (products.length > 0) {
            setLoading(false);
        }
    }, [products])
    console.log(recommendedProduct);
    console.log(product);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      if (loading) {
        return <div>Loading...</div>
      }
        return (
            <div className={styles.pagewrapper}>
        <div className={styles.nav}>
            <p>
                <Link to="/">Home</Link> &#10148;
                <Link to="/shop"> Shop All </Link> &#10148; 
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
        <div className={styles.recommendation}>
            <h3>Product you may like</h3>
            <Carousel responsive={responsive} className={styles.carousel} itemClass={styles.carouselItem}>
                {recommendedProduct.map(rec => {
                    return (
                        <div key={rec.id} className={styles.recommendedImgWrapper}>
                            <img src={rec.image}></img>
                        </div>
                    )
                })}
            </Carousel>
        </div>
        </div>
        )
}

ProductInfo.propTypes = {
    product: PropTypes.node,
}