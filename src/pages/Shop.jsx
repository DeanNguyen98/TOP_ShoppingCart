import "../styles/Shop.scss"
import { useContext } from "react";
import { productContext } from "../components/ProductProvider";
import { Link } from "react-router-dom";
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
            <div className="shop-section">
                <div className="main-sidebar">
                    <div className="filter-title">Filter By</div>
                    <div className="filter-option-title">Categories</div>
                    <div className="filter-option-content">
                        <ul className="items">
                            <li className="filter-item">
                                <input type="checkbox" name="clothes" id="clothes"/>
                                <label htmlFor="clothes">Clothes</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="electronics" id="electronics"/>
                                <label htmlFor="electronics">Electronics</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="hardware" id="hardware"/>
                                <label htmlFor="hardware">Jewelry</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="jewelry" id="jewelry"/>
                                <label htmlFor="jewelry">Clothes</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-ctn">
                    {products.map(product => {
                    return (                     
                            <div className="product" key={product.id}>
                                <Link to={`/productInfo/${product.id}`}>
                                    <div className="img-wrapper">
                                    <img src={product.image}></img>
                                </div>
                                </Link>
                            <div className="p-description">
                                <p className="title">{product.title}</p>
                                <p className="price">${product.price}</p>
                            </div>
                            </div>

                    )
                })}
                </div>
            </div>
        </div>
    )
}