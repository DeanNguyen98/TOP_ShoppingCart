import "../styles/Shop.scss"
import { useContext, useState } from "react";
import { productContext } from "../components/ProductProvider";
import { Link } from "react-router-dom";
export default function Shop () {
    const products = useContext(productContext);
    const [selectedCategories, setSelectedCategories] = useState([]);
    
    // Handle category checkbox change
    const handleCategoryChange = (event) => {
        const { name, checked } = event.target;
        setSelectedCategories(prev => 
            checked ? [...prev, name] : prev.filter(category => category !== name)
        );
    };

    // Filter products based on selected categories
    const filteredProducts = products.filter(product =>
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
    );
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
                                <input type="checkbox" name="men's clothing" id="men's clothing"  onChange={handleCategoryChange}/>
                                <label htmlFor="clothes">Men&apos;s Clothing</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="electronics" id="electronics"  
                                onChange={handleCategoryChange}/>
                                <label htmlFor="electronics">Electronics</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="jewelery" id="jewelery"
                                 onChange={handleCategoryChange}/>
                                <label htmlFor="jewelery">Jewelry</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="women's clothing" id="women's clothing"
                                 onChange={handleCategoryChange}/>
                                <label htmlFor="women's clothing">Women&apos;s clothing</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-ctn">
                    {filteredProducts.map(product => {
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