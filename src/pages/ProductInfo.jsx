import PropTypes from "prop-types"
import { useContext } from "react"
import { productContext } from "../components/ProductProvider"
import { useParams } from "react-router-dom";
    export default function ProductInfo () {
    const products = useContext(productContext);
    const { productId } = useParams();
    const product = products.find(product => product.id === parseInt(productId));
    console.log(product);
        return (
            <>
        <div className="info-ctn">
            <div className="info-img-wrapper">
            <img className="info-img" src={product.image}></img>
            <p>{product.description}</p>
            <p>${product.price}</p>
            </div>
        </div>
        </>
        )
}

ProductInfo.propTypes = {
    product: PropTypes.node,
}