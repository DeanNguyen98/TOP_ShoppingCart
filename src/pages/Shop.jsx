import "../styles/Shop.scss"
import { useContext } from "react";
import { productContext } from "../components/ProductProvider";
export default function Shop () {
    const products = useContext(productContext);
    return (
        <div className="shop-page">
            <div className="result-navbar">
                <p>Shop All</p>
                <label>Sort &nbsp;
                    <select className="sorter-select" name="SortProduct">
                        <option value="all">All Products</option>
                        <option value="price-low">PRICE: LOW TO HIGH</option>
                        <option value="price-high">PRICE: HIGH TO LOW</option>
                        <option value="alphabet">ALPHABETICAL: A TO Z</option>
                        <option value="rating">HIGHEST RATING</option>
                        
                    </select>
                </label>
            </div>
            <div className="product-ctn">
                {products.map(product => {
                    return (
                        <>
                            <div className="product">
                    <div className="img-wrapper">
                        <img src={product.image}></img>
                    </div>
                    <div className="p-description">
                        <p className="title">{product.title}</p>
                        <p className="price">{product.price}</p>
                    </div>
                </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}