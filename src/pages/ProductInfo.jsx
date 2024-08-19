import PropTypes from "prop-types"
import { useContext, useEffect, useState } from "react"
import { productContext } from "../components/ProductProvider"
import { useParams, Link } from "react-router-dom";
import styles from "./ProductInfo.module.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { cartContext } from "../components/CartProvider";

export default function ProductInfo () {
    const products = useContext(productContext);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const {cart, setCart} = useContext(cartContext);
    const product = products.find(product => product.id === parseInt(productId));
    const recommendedProduct = products.filter(p => p.category === product.category);
    useEffect(() => {
        if (products.length > 0) {
            setLoading(false);
        }
    }, [products])
    useEffect(() => {
        console.log(cart);
    },[cart]);
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

      function addProducttoCart () {
        setCart(prevCart => {
            const existingProduct = prevCart.find(p => p.id === product.id);
            if (!existingProduct) {
                return [...prevCart, {...product, quantity: 1}];
            } else {
                return prevCart.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p)
            }
            
        })
      }
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
        {/*product section*/}
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <img className={styles.image} src={product.image}></img>
            </div>
            <div className={styles.description}>
                <h2>{product.title}</h2>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <button 
                    className={styles.cartButton}
                    onClick={addProducttoCart}
                >ADD TO CART</button>
            </div>
        </div>

        {/* Recommended section */}
        <div className={styles.recommendation}>
            <h3>Product you may like</h3>
            <Carousel responsive={responsive} className={styles.carousel} itemClass={styles.carouselItem}>
                {recommendedProduct.map(rec => {
                    return (
                        <div key={rec.id}>
                            <Link to={`/productInfo/${rec.id}`}>
                                <div className={styles.recommendedImgWrapper}>
                                    <img src={rec.image}></img>
                                </div>
                            </Link>
                                <div className={styles.recommendedDescription}>
                                    <h4>{rec.title}</h4>
                                    <p>${rec.price}</p>
                                </div>
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